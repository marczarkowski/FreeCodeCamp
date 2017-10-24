<!doctype html>
<script src="code/mountains.js"></script>
<script src="code/chapter/13_dom.js"></script>

<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
</style>

<script>
  function buildTable(data) {
    const table = document.createElement('table');
    const thead = document.createElement('tr');
    
    Object.keys(data[0]).forEach((prop) => {
     const headerCell = document.createElement('th');
     headerCell.textContent = prop;
     thead.appendChild(headerCell);
    });
    
    table.appendChild(thead);
    
    data.forEach((entry) => {
      const row = document.createElement('tr');
      Object.keys(entry).forEach((prop, i) => {
        const cell = document.createElement('td');
        cell.textContent = entry[prop];
        if (typeof entry[prop] === 'number') {
         cell.style.textAlign = "right"; 
        }
        row.appendChild(cell);
      });
      
      table.appendChild(row);
    });
    
    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>