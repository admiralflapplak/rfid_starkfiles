// if ('geolocation' in navigator){
//     console.log('yes geo');
//     navigator.geolocation.getCurrentPosition(async position => {
//       const lat = position.coords.latitude;
//       const lon = position.coords.longitude;
//       document.getElementById('lati').textContent = lat;
//       document.getElementById('long').textContent = lon;
//       // console.log(position);

//       // const data = { lat, lon };
//       // const options ={
//       //   method: 'POST',
//       //   headers: {
//       //     'Content-Type': 'application/json'
//       //   },
//       //   body: JSON.stringify(data)
//       // };
//       // const response = await fetch('/rfidInfo', options);
//       // const json = await response.json();
//       // console.log(json);
//     });
//   }else{
//     console.log('no geo');
//   }