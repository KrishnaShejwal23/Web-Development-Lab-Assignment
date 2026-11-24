let expenses = [];

function addExpense() {
  let n = document.getElementById("name").value.trim();
  let a = Number(document.getElementById("amount").value);
  let c = document.getElementById("category").value;

  if (!n || a <= 0 || !c)
    return alert("Please enter valid expense details!");

  expenses.push({ n, a, c });
  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("category").selectedIndex = 0;
  showExpenses();
}

function showExpenses() {
  let list = document.getElementById("list");
  let f = document.getElementById("filter").value;
  list.innerHTML = "";

  document.getElementById("total").innerText =
    expenses.reduce((s, e) => s + e.a, 0);

  let items = expenses.filter(e => f == "All" || e.c == f);
  if (!items.length)
    list.innerHTML = '<p class="empty">No expenses to show.</p>';

  items.forEach(e => {
    let i = expenses.indexOf(e);
    list.innerHTML += `<li>${e.n} · ₹${e.a} (${e.c})
      <button onclick="del(${i})">Delete</button></li>`;
  });
}

function del(i) {
  expenses.splice(i, 1);
  showExpenses();
}
showExpenses();