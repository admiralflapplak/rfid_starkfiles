
getData();

async function getData() {
  const response = await fetch('/rfidInfo');
  const data = await response.json();

  for (item of data) {
    const root = document.createElement('p');
    const mood = document.createElement('div');
    const geo = document.createElement('div');
    const date = document.createElement('div');
    console.log(item)
    
    

    mood.textContent = `CardId: ${item.Identifier}`;
    geo.textContent = `Where: ${item.IntelligencePoint}`;
    
    date.textContent = "Clues: " 
    for (readhist of item.ReadHistory){
      const clue = readhist.IntelligencePoint;
      console.log(clue);
      date.textContent += `${clue}, `
    }

    root.append(mood, geo, date);
    document.body.append(root);
  }
  console.log(data);
}