/* ============================================================
   InterviewReady UK — Application Logic
   ============================================================ */

// ---- QUESTION BANK (100+ questions across all categories) ----
const QUESTIONS = {

  // ── UNIVERSITY ADMISSION (36 questions) ──────────────────────
  university: [
    // Introduction
    "How would you like to introduce yourself?",
    "Describe yourself in three words and explain why you chose them.",
    "Can you summarise your educational background, the subjects you studied, and how well you performed?",
    "Please provide an overview of your previous academic experience, including the institutions you attended.",

    // Why UK
    "What inspired you to study in the UK? Please give at least three reasons.",
    "What do you think will be the three biggest benefits of studying and living in the UK?",
    "How do you believe the UK education system will benefit your academic and professional goals?",
    "How did you weigh the costs of studying in the UK against the potential benefits when making your decision?",
    "In what ways do you think studying in the UK will broaden your worldview?",
    "What aspects of British life and culture are you looking forward to experiencing as a student?",
    "How have you prepared to adapt to the different culture and education system in the UK?",
    "What are the top three challenges you anticipate facing while living in the UK, and the top three benefits?",
    "How do you think studying in the UK will affect your views on global issues?",
    "What differences do you see between universities in the UK and those in your home country?",
    "What are the first three things you plan to do upon arriving in the UK?",

    // Which University
    "What is the name of the university you have applied to, and what specifically attracted you to it?",
    "What are some unique features or strengths of your chosen university that attracted you?",
    "How does this university's reputation and ranking influence your decision to study here?",
    "What made you choose this university over others in the UK?",
    "How do you think studying at this university will help you achieve your long-term goals?",
    "What special resources, facilities, or services influenced your decision to apply to this university?",
    "How do the teaching style, faculty, and courses at this university align with your learning objectives?",
    "Which other universities did you consider before making your final decision, and why did you choose this one?",
    "How did you research and compare universities before choosing this one?",
    "What networking, internship, or career opportunities does this university offer that appeal to you?",

    // Course
    "Why do you want to study this particular course, and what is your main objective?",
    "Why did you choose this course over other programmes related to your field?",
    "What do you hope to achieve academically and personally by the end of your chosen course?",
    "What are the key topics and subjects covered in your chosen programme?",
    "What are some key skills you expect to develop throughout your course of study?",
    "How have your past studies prepared you for this course at the university?",
    "What aspects of the curriculum and structure of your course appeal to you the most?",
    "How does your chosen course compare to similar courses at other institutions?",
    "How do you think your course will help you achieve your career goals?",
    "How will you manage your time for classes, assignments, and other responsibilities?",
    "Do you intend to join any extracurricular clubs or groups related to your studies?",
  ],

  // ── UK STUDENT VISA (40 questions) ───────────────────────────
  visa: [
    // Introduction & Background
    "How would you like to introduce yourself?",
    "When was your last education qualification completed, and what have you been doing professionally since?",
    "Have you ever received a visa refusal for any country or visa category? If so, please explain.",
    "Will you be bringing any dependants — such as a spouse, partner, or child — to the UK? If yes, what will they be doing?",
    "Do you have any relatives or close contacts already living in the UK?",
    "Do you have any known health conditions that may affect your ability to study?",
    "What is the name of the consultancy or agent you are applying through?",

    // Why UK
    "Why have you chosen to study in the UK rather than pursuing a similar qualification in your home country?",
    "What factors influenced your decision to choose the UK as your study destination over other countries?",
    "How did the reputation of UK universities influence your choice to study there?",
    "How popular is it to study in the UK among students from your home country?",
    "How did the cost to study in the UK compare to other countries you considered?",
    "Do UK graduates have more advantages getting a job in your country? If yes, why?",

    // University & Course
    "What is the full name of the university you have been accepted to?",
    "What course will you be studying, and why did you choose it?",
    "What are the key topics you will learn in your course?",
    "How does this course relate to your previous qualifications and your future career plans?",
    "What is your course fee, and who will be supporting the payments?",
    "How long is your course, and when does it start?",

    // Accommodation
    "Where will you be staying in the UK? Describe your accommodation, rent, and distance to the university.",
    "What type of accommodation have you arranged — university halls, private rental, or homestay?",
    "How did you research and compare different accommodation options before making your decision?",
    "What factors influenced your choice of accommodation, such as cost, location, or amenities?",
    "How do you plan to commute between your accommodation and the university campus?",
    "What safety and security measures were important to you when selecting your accommodation?",

    // Working Restrictions
    "Are you aware of the restrictions on working while studying in the UK on a student visa?",
    "How many hours per week are international students permitted to work during term time in the UK?",
    "Can you explain the rules around working hours for international students under your visa type?",
    "How familiar are you with the rules and regulations related to working on a UK student visa?",
    "Are you planning to look for a part-time job while studying in the UK?",

    // Financial Support
    "Who will be supporting you financially during your studies in the UK?",
    "Can you explain how you have saved or prepared financially for your studies, including savings or family contributions?",
    "Have you researched the UKVI financial requirements for international students and how you meet them?",
    "What are the primary sources of funding you will use for tuition fees and living expenses?",
    "How have you budgeted for living expenses including accommodation, food, transport, and daily costs?",
    "How do you plan to cover any unexpected expenses that may arise during your studies?",
    "How will you manage currency exchange rates and their potential impact on your budget?",

    // Career & Return Plans
    "What are your plans after completing your studies in the UK?",
    "Are you planning to return to your home country after graduating? What will you do there?",
    "What family, professional, or social ties do you have to your home country that will ensure you return after your studies?",
    "How do you think your UK qualification will benefit your career in your home country?",
    "How do you plan to stay updated with any changes to immigration rules or regulations affecting your stay?",
  ],

  // ── SCHOLARSHIP (38 questions) ───────────────────────────────
  scholarship: [
    // Introduction & Personal
    "How would you like to introduce yourself and describe your background?",
    "Describe yourself in three words and explain why those words represent you.",
    "What are your strengths and weaknesses, and how are you working to improve them?",
    "Who is a role model or teacher who has inspired you the most, and why?",
    "What is your main aim in life, and where does this scholarship fit into that vision?",

    // Why UK & University
    "Why have you chosen to study in the UK for this scholarship, rather than in your home country?",
    "What unique features or strengths of your chosen university made it your top choice?",
    "How does this university's teaching approach and faculty align with your academic goals?",
    "What special resources or facilities at this university will support your research or studies?",
    "How did you consider the benefits and drawbacks of different universities before making your final choice?",

    // Leadership & Impact
    "Describe a time you demonstrated leadership and created a measurable positive impact in your community.",
    "Can you provide an example of a situation where you took initiative to solve a significant problem?",
    "How have you contributed to your community, organisation, or country in a meaningful way?",
    "Describe a time when you had to adapt to a completely new environment or culture.",
    "Can you share a time when you managed multiple responsibilities simultaneously and still succeeded?",
    "Tell me about a significant failure or setback you experienced and what you learned from it.",

    // Career & Development
    "What specific problem in your home country are you most passionate about solving?",
    "How will your UK studies directly help you contribute to development in your home country when you return?",
    "Can you describe your short-term goals (1–3 years) and long-term goals (5–10 years) after completing your degree?",
    "How do you plan to use the connections and networks you build during your studies to support your post-graduation plans?",
    "What are the three main jobs available in your country for graduates of your chosen course?",
    "What is the average salary range for your target role in your home country and abroad?",
    "How do you plan to give back to your home country or community with the knowledge and skills gained?",
    "What are your plans for keeping up with new developments and changes in your field after graduation?",

    // Scholarship Justification
    "Why do you deserve this scholarship over other equally qualified and motivated candidates?",
    "How does receiving this scholarship align with the values and mission of the awarding organisation?",
    "How will this scholarship change your life and the lives of those around you?",
    "What have you done to demonstrate commitment to the field you want to study?",
    "How have your past academic achievements and extracurricular activities prepared you for this programme?",

    // Financial & Practical
    "How will you fund any additional costs not covered by this scholarship?",
    "How do you plan to cover any unexpected expenses that may arise during your studies?",
    "Will you be bringing any dependants to the UK? If yes, what will they be doing?",
    "What is your plan for accommodation, and how does it suit your study needs?",

    // Personal & Cultural
    "What aspects of British culture and academic life are you most looking forward to?",
    "How do you think meeting and studying alongside students from diverse international backgrounds will benefit you?",
    "What do you enjoy doing in your spare time, and how do those interests complement your academic goals?",
    "How have you maintained or improved your English language skills in preparation for UK study?",
    "If you had the opportunity to create a new course or initiative at your university, what would it be and why?",
    "What advice would you give to a future scholarship applicant based on your experience so far?",
  ],
};

const TYPE_LABELS = {
  university: 'University Admission',
  visa: 'UK Student Visa',
  scholarship: 'Scholarship Interview'
};

const QUESTIONS_PER_SESSION = 12;

// ---- STATE ----
let selectedType = null;
let currentQ = 0;
let questions = [];
let answers = [];
let feedbacks = [];
let isRecording = false;
let recognition = null;
let recordingTranscriptBase = '';
let timerInterval = null;
let timerSeconds = 120;
const TIMER_DURATION = 120;

// ---- ANTHROPIC API KEY ----
// Replace with your actual key from https://console.anthropic.com
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
  const pool = [...QUESTIONS[selectedType]];
  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  questions = pool.slice(0, QUESTIONS_PER_SESSION);
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
    startTimer();
  }, 600);
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
  stopTimer();
  if (isRecording) stopRecording();
  answers.push('[No answer given — skipped]');
  feedbacks.push(null);
  updateHistory();
  moveToNext();
}

async function submitAnswer() {
  stopTimer();
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
    return getMockFeedback(answer);
  }

  const typeLabel = TYPE_LABELS[selectedType];
  const prompt = `You are Dr. Emma Clarke, an expert UK study abroad interview coach with 15 years of experience helping international students prepare for university admission, visa, and scholarship interviews.

Interview type: ${typeLabel}
Question asked: "${question}"
Student's answer: "${answer}"

Evaluate this answer thoroughly and fairly. Return ONLY a valid JSON object with no markdown, no backticks, and no extra text:
{
  "score": <integer from 1 to 10>,
  "overall": "<2-3 sentence overall assessment in a warm, encouraging coaching tone>",
  "strengths": "<2-3 specific things the student did well — be concrete, not generic>",
  "improvements": "<2-3 specific, actionable areas to improve — give examples of what to add or change>",
  "ideal_approach": "<concisely describe what a 9 or 10 out of 10 answer would include — structure, key points, tone>"
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
  const wordCount = answer.split(/\s+/).filter(Boolean).length;
  const score = Math.min(8, Math.max(4, Math.round(wordCount / 12)));
  return {
    score,
    overall: `Your answer shows genuine effort and covers some key points. To make it stronger, focus on using the STAR method (Situation, Task, Action, Result) and providing specific examples. Add your Anthropic API key to app.js to enable full AI-powered coaching.`,
    strengths: 'You attempted to address the question directly. Your response shows engagement with the topic and a willingness to share your perspective.',
    improvements: 'Add specific real-life examples from your own experience. Quantify achievements where possible (e.g. "I led a team of 5" rather than "I led a team"). Be more explicit about your motivations for choosing the UK specifically.',
    ideal_approach: 'A strong answer opens with a clear, specific example, walks through the context and your actions step by step, states the concrete outcome, and directly links it back to your goals for studying in the UK.'
  };
}

// ---- RENDER FEEDBACK ----
function renderFeedback(fb, container) {
  const score = fb ? fb.score : 0;
  const scoreColor = score >= 8 ? 'var(--green-600)' : score >= 5 ? 'var(--amber-600)' : 'var(--red-600)';
  const labelClass = score >= 8 ? 'high' : score >= 5 ? 'mid' : 'low';
  const labelText = score >= 8 ? 'Excellent' : score >= 6 ? 'Good' : score >= 4 ? 'Developing' : 'Needs work';
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
    const shortQ = questions[i].substring(0, 30) + '…';
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
  stopTimer();
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

  const validScores = feedbacks
    .filter(f => f && typeof f.score === 'number' && f.score > 0)
    .map(f => f.score);
  const avg = validScores.length
    ? Math.round((validScores.reduce((a, b) => a + b, 0) / validScores.length) * 10) / 10
    : 0;
  const best = validScores.length ? Math.max(...validScores) : 0;
  const answered = answers.filter(a => !a.includes('skipped')).length;
  const readyText = avg >= 7 ? 'Yes ✓' : avg >= 5 ? 'Almost' : 'Keep going';
  const readyDesc = avg >= 7 ? 'Strong performance' : avg >= 5 ? 'Good progress' : 'More practice needed';

  const avgColor = avg >= 8 ? 'var(--green-600)' : avg >= 5 ? 'var(--amber-600)' : 'var(--red-600)';
  const bestColor = best >= 8 ? 'var(--green-600)' : best >= 5 ? 'var(--amber-600)' : 'var(--red-600)';

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
      <div class="metric-label">UK ready?</div>
      <div class="metric-val" style="font-size:18px;">${readyText}</div>
      <div class="metric-sub">${readyDesc}</div>
    </div>
  `;

  let breakdownHTML = '';
  for (let i = 0; i < questions.length; i++) {
    const fb = feedbacks[i];
    const score = fb ? fb.score : null;
    const color = score !== null
      ? (score >= 8 ? 'var(--green-600)' : score >= 5 ? 'var(--amber-600)' : 'var(--red-600)')
      : 'var(--text-mute)';
    const tip = fb ? fb.improvements.split('.')[0] + '.' : 'No feedback available.';

    breakdownHTML += `
      <div class="breakdown-item">
        <div class="breakdown-num">Q${i + 1}</div>
        <div class="breakdown-content">
          <div class="breakdown-q">${questions[i]}</div>
          ${fb ? `<div class="breakdown-fb">💡 ${tip}</div>` : '<div class="breakdown-fb">Skipped or unanswered</div>'}
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
  startInterviewWithSameType();
}

function startInterviewWithSameType() {
  const pool = [...QUESTIONS[selectedType]];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  questions = pool.slice(0, QUESTIONS_PER_SESSION);
  currentQ = 0;
  answers = [];
  feedbacks = [];
  document.getElementById('interview-type-label').textContent = TYPE_LABELS[selectedType];
  showScreen('screen-interview');
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


// ---- TIMER ----
const CIRCUMFERENCE = 100; // matches stroke-dasharray in SVG

function startTimer() {
  stopTimer(); // clear any existing
  timerSeconds = TIMER_DURATION;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();
    if (timerSeconds <= 0) {
      stopTimer();
      autoSubmitOnTimeout();
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerDisplay() {
  const textEl = document.getElementById('timer-text');
  const ringEl = document.getElementById('timer-ring-fill');
  const rowEl  = document.querySelector('.timer-row');
  const labelEl = document.getElementById('timer-label');
  if (!textEl || !ringEl || !rowEl) return;

  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  textEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;

  // Shrink the ring as time runs out
  const progress = timerSeconds / TIMER_DURATION;
  const offset = CIRCUMFERENCE - (progress * CIRCUMFERENCE);
  ringEl.style.strokeDashoffset = offset;

  // Colour states
  rowEl.classList.remove('warning', 'danger');
  if (timerSeconds <= 30) {
    rowEl.classList.add('danger');
    labelEl.textContent = 'Hurry up!';
  } else if (timerSeconds <= 60) {
    rowEl.classList.add('warning');
    labelEl.textContent = 'Time running out';
  } else {
    labelEl.textContent = 'Time remaining';
  }
}

function autoSubmitOnTimeout() {
  const answer = document.getElementById('answer-text').value.trim();
  if (answer) {
    // Auto-submit if they have typed/spoken something
    submitAnswer();
  } else {
    // Skip if nothing entered
    const rowEl = document.querySelector('.timer-row');
    if (rowEl) rowEl.classList.add('danger');
    const labelEl = document.getElementById('timer-label');
    if (labelEl) labelEl.textContent = "Time's up!";
    setTimeout(() => skipQuestion(), 1200);
  }
}

// ---- KEYBOARD SHORTCUTS ----
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('modal-overlay');
    if (modal.style.display !== 'none') closeModal();
  }
});
