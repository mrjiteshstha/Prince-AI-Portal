/* ============================================================
   InterviewReady UK — Application Logic
   ============================================================ */

// ---- QUESTION BANK ----
const QUESTIONS = {
  university: [
    "Why do you want to study in the UK specifically, and why have you chosen this particular university for your programme?",
    "Tell me about a challenging academic problem you faced. How did you approach solving it, and what did you learn?",
    "What motivated you to choose this field of study? Can you give a specific example that sparked your interest?",
    "How have your previous academic experiences and extracurricular activities prepared you for this programme?",
    "Where do you see yourself professionally 5 to 10 years after completing this degree, and how does this UK programme help you get there?",
    "Describe a time you had to work with people from different backgrounds or cultures. What did you learn from the experience?",
    "What do you think are the biggest challenges currently facing your field of study, and how do you hope to contribute to solving them?"
  ],
  visa: [
    "Why have you chosen to study in the UK rather than pursuing a similar qualification in your home country?",
    "How will you fund your tuition fees and living expenses throughout your entire period of study in the UK?",
    "What are your plans after completing your studies in the UK? Describe your career goals back in your home country.",
    "Tell me about your English language proficiency. How have you demonstrated it, and how will you manage academic work in English?",
    "What family, professional, or social ties do you have to your home country that will ensure you return after your studies?",
    "Can you explain any gaps in your education or employment history that appear in your application?",
    "How does this specific course in the UK relate to your previous qualifications and your future career plans?"
  ],
  scholarship: [
    "Describe a time you demonstrated leadership and created a measurable positive impact in your community or organisation.",
    "What specific problem in your home country are you most passionate about solving, and why does it matter to you personally?",
    "Why do you deserve this scholarship over other equally qualified and motivated candidates?",
    "How will your studies in the UK directly help you contribute to development and positive change in your home country when you return?",
    "Tell me about a significant failure or setback you have experienced. How did you respond, and what did you learn from it?",
    "Where do you see yourself in ten years, and what will your legacy be in your field or community?",
    "How have you previously built relationships and networks across different sectors, and how will you use those skills as a scholarship recipient?"
  ]
};

const TYPE_LABELS = {
  university: 'University Admission',
  visa: 'UK Student Visa',
  scholarship: 'Scholarship Interview'
};

// ---- STATE ----
let selectedType = null;
let currentQ = 0;
let questions = [];
let answers = [];
let feedbacks = [];
let isRecording = false;
let recognition = null;
let recordingTranscriptBase = '';

// ---- ANTHROPIC API KEY ----
// IMPORTANT: Replace this with your actual Anthropic API key.
// To get one: https://console.anthropic.com/
// For production, use a backend proxy instead of exposing the key here.
const ANTHROPIC_API_KEY = 'YOUR_API_KEY_HERE';

// ---- HOME SCREEN ----
function selectType(el) {
  document.querySelectorAll('.type-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedType = el.dataset.type;
  document.getElementById('start-btn').disabled = false;
}

function startInterview() {
  if (!selectedType) return;
  // Shuffle questions and pick 5
  const pool = [...QUESTIONS[selectedType]];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  questions = pool.slice(0, 5);
  currentQ = 0;
  answers = [];
  feedbacks = [];

  document.getElementById('interview-type-label').textContent = TYPE_LABELS[selectedType];
  showScreen('screen-interview');
  loadQuestion();
}

// ---- SCREEN MANAGEMENT ----
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---- INTERVIEW FLOW ----
function loadQuestion() {
  updateProgress();
  document.getElementById('feedback-inline').style.display = 'none';
  document.getElementById('feedback-inline').innerHTML = '';
  document.getElementById('answer-area').style.display = 'none';

  const qa = document.getElementById('question-area');
  qa.innerHTML = `<div class="loading-state"><div class="spinner"></div><div class="loading-text">Loading question ${currentQ + 1}...</div></div>`;

  setTimeout(() => {
    const q = questions[currentQ];
    qa.innerHTML = `
      <div class="question-card">
        <div class="q-eyebrow">Question ${currentQ + 1} of ${questions.length}</div>
        <div class="q-text">${q}</div>
      </div>
      <div class="speaking-bar">
        <div class="pulse"></div>
        Dr. Clarke is waiting for your answer
      </div>
    `;
    const ta = document.getElementById('answer-text');
    ta.value = '';
    recordingTranscriptBase = '';
    document.getElementById('answer-area').style.display = 'block';
    document.getElementById('submit-btn').disabled = false;
    stopRecording();
  }, 700);
}

function updateProgress() {
  const pct = Math.round((currentQ / questions.length) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('q-counter').textContent = `Question ${currentQ + 1} of ${questions.length}`;
}

// ---- RECORDING ----
function toggleRecording() {
  if (isRecording) {
    stopRecording();
  } else {
    startRecording();
  }
}

function startRecording() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    alert('Speech recognition is not supported in this browser. Please use Chrome or Edge, or type your answer instead.');
    return;
  }

  recognition = new SR();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-GB';

  recordingTranscriptBase = document.getElementById('answer-text').value;

  recognition.onresult = (e) => {
    let interim = '';
    let final = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) {
        final += e.results[i][0].transcript + ' ';
      } else {
        interim += e.results[i][0].transcript;
      }
    }
    if (final) recordingTranscriptBase += final;
    document.getElementById('answer-text').value = recordingTranscriptBase + interim;
  };

  recognition.onerror = (e) => {
    if (e.error !== 'aborted') stopRecording();
  };

  recognition.onend = () => {
    if (isRecording) {
      try { recognition.start(); } catch(e) {}
    }
  };

  recognition.start();
  isRecording = true;

  const btn = document.getElementById('mic-btn');
  btn.classList.add('recording');
  document.getElementById('mic-icon').className = 'ti ti-player-stop';
  document.getElementById('mic-label').textContent = 'Recording — tap to stop';
  document.getElementById('mic-dot').style.display = 'block';
}

function stopRecording() {
  if (recognition) {
    try { recognition.abort(); } catch(e) {}
    recognition = null;
  }
  isRecording = false;
  const btn = document.getElementById('mic-btn');
  if (btn) {
    btn.classList.remove('recording');
    document.getElementById('mic-icon').className = 'ti ti-microphone';
    document.getElementById('mic-label').textContent = 'Tap to speak';
    document.getElementById('mic-dot').style.display = 'none';
  }
}

// ---- SUBMIT ANSWER ----
function skipQuestion() {
  if (isRecording) stopRecording();
  answers.push('[No answer given — skipped]');
  feedbacks.push(null);
  updateHistory();
  moveToNext();
}

async function submitAnswer() {
  if (isRecording) stopRecording();
  const answer = document.getElementById('answer-text').value.trim();
  if (!answer) {
    alert('Please type or speak your answer before submitting.');
    return;
  }

  answers.push(answer);
  document.getElementById('answer-area').style.display = 'none';
  document.getElementById('submit-btn').disabled = true;

  const fb = document.getElementById('feedback-inline');
  fb.style.display = 'block';
  fb.innerHTML = `<div class="loading-state"><div class="spinner"></div><div class="loading-text">Analysing your answer with AI...</div></div>`;

  const result = await getFeedback(questions[currentQ], answer, currentQ);
  feedbacks[currentQ] = result;
  updateHistory();
  renderFeedback(result, fb);
}

// ---- AI FEEDBACK ----
async function getFeedback(question, answer, qIdx) {
  if (!ANTHROPIC_API_KEY || ANTHROPIC_API_KEY === 'YOUR_API_KEY_HERE') {
    // Demo mode: return mock feedback
    return getMockFeedback(answer);
  }

  const typeLabel = TYPE_LABELS[selectedType];
  const prompt = `You are Er. Prince Shrestha, an expert UK study abroad interview coach with 15 years of experience helping international students prepare for university admission, visa, and scholarship interviews.

Interview type: ${typeLabel}
Question asked: "${question}"
Student's answer: "${answer}"

Evaluate this answer thoroughly. Return ONLY a valid JSON object with no markdown formatting, no backticks, and no preamble:
{
  "score": <integer from 1 to 10>,
  "overall": "<2-3 sentence overall assessment of the answer in a warm, coaching tone>",
  "strengths": "<2-3 specific things the student did well — be concrete, not generic>",
  "improvements": "<2-3 specific, actionable areas to improve — give examples of what to add or change>",
  "ideal_approach": "<describe concisely what a 9 or 10 out of 10 answer to this question would include — structure, content, tone>"
}`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error('API error:', err);
      return getMockFeedback(answer);
    }

    const data = await res.json();
    const text = data.content
      .map(c => c.text || '')
      .join('')
      .replace(/```json|```/g, '')
      .trim();

    return JSON.parse(text);
  } catch (err) {
    console.error('Feedback error:', err);
    return getMockFeedback(answer);
  }
}

function getMockFeedback(answer) {
  // Fallback feedback when no API key is set
  const wordCount = answer.split(/\s+/).filter(Boolean).length;
  const score = Math.min(10, Math.max(4, Math.round(wordCount / 10)));
  return {
    score,
    overall: `Your answer shows genuine effort and covers some key points. To make it stronger, focus on using the STAR method (Situation, Task, Action, Result) to structure your response more clearly. Add the API key to enable full AI-powered feedback.`,
    strengths: 'You attempted to answer the question directly. Your response demonstrates engagement with the topic.',
    improvements: 'Add specific examples from your own experience. Quantify your achievements where possible. Be more explicit about your motivations.',
    ideal_approach: 'A strong answer would open with a specific example, walk through the situation and your actions step by step, explain the outcome, and link it clearly back to your goals for studying in the UK.'
  };
}

// ---- RENDER FEEDBACK ----
function renderFeedback(fb, container) {
  const score = fb ? fb.score : 0;
  const scoreColor = score >= 8 ? 'var(--green-600)' : score >= 5 ? 'var(--amber-600)' : 'var(--red-600)';
  const labelClass = score >= 8 ? 'high' : score >= 5 ? 'mid' : 'low';
  const labelText = score >= 8 ? 'Excellent' : score >= 5 ? 'Good' : 'Needs work';
  const isLast = currentQ >= questions.length - 1;

  container.innerHTML = `
    <div class="feedback-wrap">
      <div class="score-row">
        <span class="score-num" style="color:${scoreColor};">${score}</span>
        <span class="score-denom">/10</span>
        <span class="score-label ${labelClass}">${labelText}</span>
      </div>
      <div class="feedback-overall">${fb.overall}</div>
      <div class="feedback-cards">
        <div class="fb-card strengths">
          <div class="fb-card-label"><i class="ti ti-circle-check" aria-hidden="true"></i> Strengths</div>
          <div class="fb-card-text">${fb.strengths}</div>
        </div>
        <div class="fb-card improve">
          <div class="fb-card-label"><i class="ti ti-trending-up" aria-hidden="true"></i> To improve</div>
          <div class="fb-card-text">${fb.improvements}</div>
        </div>
      </div>
      <div class="fb-ideal">
        <div class="fb-ideal-label"><i class="ti ti-bulb" aria-hidden="true"></i> What a great answer looks like</div>
        <div class="fb-ideal-text">${fb.ideal_approach}</div>
      </div>
      <div class="fb-nav">
        <button class="btn-primary" onclick="moveToNext()">
          <i class="ti ${isLast ? 'ti-chart-bar' : 'ti-arrow-right'}" aria-hidden="true"></i>
          ${isLast ? 'See full results' : 'Next question'}
        </button>
        <button class="btn-ghost" onclick="retryQuestion()">
          <i class="ti ti-refresh" aria-hidden="true"></i>
          Try again
        </button>
      </div>
    </div>
  `;
}

// ---- HISTORY SIDEBAR ----
function updateHistory() {
  const list = document.getElementById('history-list');
  if (answers.length === 0) {
    list.innerHTML = '<div class="history-empty">No answers yet</div>';
    return;
  }
  let html = '';
  for (let i = 0; i < answers.length; i++) {
    const fb = feedbacks[i];
    const score = fb ? fb.score : null;
    let pillClass = 'none', scoreText = '—';
    if (score !== null) {
      scoreText = score + '/10';
      pillClass = score >= 8 ? 'high' : score >= 5 ? 'mid' : 'low';
    }
    const shortQ = questions[i].substring(0, 32) + '…';
    html += `<div class="history-item">
      <span class="h-q">Q${i + 1}: ${shortQ}</span>
      <span class="score-pill ${pillClass}">${scoreText}</span>
    </div>`;
  }
  list.innerHTML = html;
}

// ---- NAVIGATION ----
function moveToNext() {
  currentQ++;
  if (currentQ >= questions.length) {
    showResults();
  } else {
    loadQuestion();
  }
}

function retryQuestion() {
  // Remove the last answer and re-show the question
  answers.pop();
  feedbacks[currentQ] = undefined;
  loadQuestion();
  updateHistory();
}

function confirmEnd() {
  document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal-overlay').style.display = 'none';
}

function endInterview() {
  closeModal();
  stopRecording();
  if (answers.length === 0) {
    goHome();
    return;
  }
  showResults();
}

// ---- RESULTS SCREEN ----
function showResults() {
  showScreen('screen-results');

  const validScores = feedbacks.filter(f => f && typeof f.score === 'number' && f.score > 0).map(f => f.score);
  const avg = validScores.length
    ? Math.round((validScores.reduce((a, b) => a + b, 0) / validScores.length) * 10) / 10
    : 0;
  const best = validScores.length ? Math.max(...validScores) : 0;
  const answered = answers.filter(a => !a.includes('skipped')).length;
  const readyText = avg >= 7 ? 'Yes ✓' : avg >= 5 ? 'Almost' : 'Keep going';
  const readyDesc = avg >= 7 ? 'Strong performance' : avg >= 5 ? 'Good progress' : 'More practice needed';

  const avgColor = avg >= 8 ? 'var(--green-600)' : avg >= 5 ? 'var(--amber-600)' : 'var(--red-600)';
  const bestColor = best >= 8 ? 'var(--green-600)' : best >= 5 ? 'var(--amber-600)' : 'var(--red-600)';

  // Badge
  const badgeEl = document.getElementById('results-badge');
  if (avg >= 7) {
    badgeEl.style.cssText = 'background:var(--green-50);color:var(--green-600);';
    badgeEl.textContent = '🎉 Great session!';
  } else if (avg >= 5) {
    badgeEl.style.cssText = 'background:var(--amber-50);color:var(--amber-600);';
    badgeEl.textContent = '💪 Good effort!';
  } else {
    badgeEl.style.cssText = 'background:var(--blue-50);color:var(--blue-600);';
    badgeEl.textContent = '📚 Keep practising!';
  }

  // Metrics
  document.getElementById('results-metrics').innerHTML = `
    <div class="metric-card">
      <div class="metric-label">Average score</div>
      <div class="metric-val" style="color:${avgColor};">${avg}</div>
      <div class="metric-sub">out of 10</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Best answer</div>
      <div class="metric-val" style="color:${bestColor};">${best}/10</div>
      <div class="metric-sub">your peak</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Answered</div>
      <div class="metric-val">${answered}</div>
      <div class="metric-sub">of ${questions.length} questions</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Ready for UK?</div>
      <div class="metric-val" style="font-size:18px;">${readyText}</div>
      <div class="metric-sub">${readyDesc}</div>
    </div>
  `;

  // Breakdown
  let breakdownHTML = '';
  for (let i = 0; i < questions.length; i++) {
    const fb = feedbacks[i];
    const score = fb ? fb.score : null;
    const color = score !== null
      ? (score >= 8 ? 'var(--green-600)' : score >= 5 ? 'var(--amber-600)' : 'var(--red-600)')
      : 'var(--text-mute)';
    const improvement = fb ? fb.improvements.split('.')[0] + '.' : 'No feedback available.';

    breakdownHTML += `
      <div class="breakdown-item">
        <div class="breakdown-num">Q${i + 1}</div>
        <div class="breakdown-content">
          <div class="breakdown-q">${questions[i]}</div>
          ${fb ? `<div class="breakdown-fb">💡 ${improvement}</div>` : '<div class="breakdown-fb">Skipped or unanswered</div>'}
        </div>
        <div class="breakdown-score-col" style="color:${color};">${score !== null ? score + '/10' : '—'}</div>
      </div>
    `;
  }
  document.getElementById('q-breakdown').innerHTML = breakdownHTML;
}

function restartInterview() {
  currentQ = 0;
  answers = [];
  feedbacks = [];
  questions = [];
  showScreen('screen-interview');
  startInterviewWithSameType();
}

function startInterviewWithSameType() {
  const pool = [...QUESTIONS[selectedType]];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  questions = pool.slice(0, 5);
  currentQ = 0;
  answers = [];
  feedbacks = [];
  document.getElementById('interview-type-label').textContent = TYPE_LABELS[selectedType];
  loadQuestion();
  updateHistory();
}

function goHome() {
  stopRecording();
  selectedType = null;
  currentQ = 0;
  answers = [];
  feedbacks = [];
  questions = [];
  document.querySelectorAll('.type-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('start-btn').disabled = true;
  showScreen('screen-home');
}

// ---- KEYBOARD SHORTCUTS ----
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('modal-overlay');
    if (modal.style.display !== 'none') closeModal();
  }
});
