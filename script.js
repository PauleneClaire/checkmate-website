const dialog=document.getElementById("joinDialog");
const toast=document.getElementById("toast");
const openJoin=()=>{
  document.getElementById("formResult").hidden=true;
  document.getElementById("registrationFields").innerHTML="";
  document.querySelector(".role-choice").hidden=false;
  dialog.showModal();
};
["joinTopBtn","heroJoinBtn","bottomJoinBtn"].forEach(id=>document.getElementById(id).addEventListener("click",openJoin));

["studentSignInBtn","tutorSignInBtn"].forEach(id=>document.getElementById(id).addEventListener("click",()=>{showToast("Sign-in for this account type will be available soon.");}));
document.querySelectorAll("[data-view]").forEach(btn=>btn.addEventListener("click",()=>{const target=btn.dataset.view==="plans"?"plansSection":btn.dataset.view==="how"?"howSection":"discoverSection";document.getElementById(target).scrollIntoView({behavior:"smooth"});document.querySelectorAll(".nav-link").forEach(n=>n.classList.toggle("active",n===btn))}));
document.querySelectorAll("[data-scroll]").forEach(btn=>btn.addEventListener("click",()=>document.getElementById(btn.dataset.scroll).scrollIntoView({behavior:"smooth"})));
document.querySelectorAll("[data-category]").forEach(btn=>btn.addEventListener("click",()=>{showToast("Topic selected: "+btn.dataset.category+". Learner discovery will be available after account setup.");document.getElementById("discoverSection").scrollIntoView({behavior:"smooth"})}));
document.getElementById("browseAllBtn").addEventListener("click",()=>showToast("More learning categories are coming soon."));
const roleChoice = document.querySelector(".role-choice");
const registrationFields = document.getElementById("registrationFields");
const formResult = document.getElementById("formResult");

function showRegistrationForm(role) {
  roleChoice.hidden = true;
  formResult.hidden = true;

  const isStudent = role === "student";

  registrationFields.innerHTML = `
    <form id="roleRegistrationForm">
      <h3>${isStudent ? "Student Registration" : "Tutor Registration"}</h3>

      <label for="registrationName">Full name</label>
      <input id="registrationName" required maxlength="60" placeholder="Your name">

      <label for="registrationEmail">Email address</label>
      <input id="registrationEmail" type="email" required placeholder="Your email">

      ${
        isStudent
        ? `
          <label for="studentGoal">What would you like to learn?</label>
          <select id="studentGoal" required>
            <option value="English lessons">English lessons</option>
            <option value="IELTS preparation">IELTS preparation</option>
            <option value="Conversation practice">Conversation practice</option>
          </select>

          <label for="studentLevel">English level</label>
          <select id="studentLevel">
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        `
        : `
          <label for="tutorSubjects">What can you teach?</label>
          <input id="tutorSubjects" required placeholder="English, IELTS, etc.">

          <label for="tutorRate">Your hourly rate (PHP)</label>
          <input id="tutorRate" type="number" min="1" required placeholder="Your rate">

          <label for="tutorExperience">Teaching experience</label>
          <select id="tutorExperience">
            <option>Less than 1 year</option>
            <option>1–3 years</option>
            <option>4–6 years</option>
            <option>7+ years</option>
          </select>
        `
      }

      <button class="button button-dark full-button" type="submit">
        Preview my registration →
      </button>

      <button type="button" class="button button-outline full-button" id="backToRolesBtn">
        Back
      </button>
    </form>
  `;

  document.getElementById("backToRolesBtn").addEventListener("click", () => {
    registrationFields.innerHTML = "";
    roleChoice.hidden = false;
    formResult.hidden = true;
  });

  document.getElementById("roleRegistrationForm").addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("registrationName").value.trim();

    formResult.hidden = false;
    formResult.innerHTML = `
      <b>${isStudent ? "Student" : "Tutor"} registration preview for ${escapeHTML(name)}.</b>
      <p>This is only a preview. No account has been created and no information has been sent.</p>
    `;
  });
}

document.getElementById("registerStudentBtn").addEventListener("click", () => {
  showRegistrationForm("student");
});

document.getElementById("registerTutorBtn").addEventListener("click", () => {
  showRegistrationForm("tutor");
});function escapeHTML(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function showToast(message){toast.textContent=message;toast.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("show"),2600)}
document.getElementById("year").textContent=new Date().getFullYear();
