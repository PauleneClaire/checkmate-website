const dialog=document.getElementById("joinDialog");
const toast=document.getElementById("toast");
const openJoin=()=>{document.getElementById("formResult").hidden=true;dialog.showModal()};
["joinTopBtn","heroJoinBtn","bottomJoinBtn"].forEach(id=>document.getElementById(id).addEventListener("click",openJoin));

["studentSignInBtn","tutorSignInBtn"].forEach(id=>document.getElementById(id).addEventListener("click",()=>{showToast("Sign-in for this account type will be available soon.");}));
document.querySelectorAll("[data-view]").forEach(btn=>btn.addEventListener("click",()=>{const target=btn.dataset.view==="plans"?"plansSection":btn.dataset.view==="how"?"howSection":"discoverSection";document.getElementById(target).scrollIntoView({behavior:"smooth"});document.querySelectorAll(".nav-link").forEach(n=>n.classList.toggle("active",n===btn))}));
document.querySelectorAll("[data-scroll]").forEach(btn=>btn.addEventListener("click",()=>document.getElementById(btn.dataset.scroll).scrollIntoView({behavior:"smooth"})));
document.querySelectorAll("[data-category]").forEach(btn=>btn.addEventListener("click",()=>{showToast("Topic selected: "+btn.dataset.category+". Learner discovery will be available after account setup.");document.getElementById("discoverSection").scrollIntoView({behavior:"smooth"})}));
document.getElementById("browseAllBtn").addEventListener("click",()=>showToast("More learning categories are coming soon."));
const accountSpace=document.getElementById("accountSpace");
accountSpace.addEventListener("change",()=>{document.getElementById("juniorNote").hidden=accountSpace.value!=="junior"});
document.getElementById("profileForm").addEventListener("submit",e=>{e.preventDefault();const name=document.getElementById("displayName").value.trim();const goal=document.getElementById("learningGoal").value;const space=accountSpace.value;const result=document.getElementById("formResult");result.hidden=false;result.innerHTML=space==="junior"?`<b>Junior profile preview created for ${escapeHTML(name)}.</b><br>A parent or guardian must complete the real registration and consent process. This demo has not created an account.`:`<b>Welcome to Checkmate, ${escapeHTML(name)}!</b><br>Your interest: ${escapeHTML(goal)}. This is a local preview only; no account has been created.`;});
function escapeHTML(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function showToast(message){toast.textContent=message;toast.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("show"),2600)}
document.getElementById("year").textContent=new Date().getFullYear();
