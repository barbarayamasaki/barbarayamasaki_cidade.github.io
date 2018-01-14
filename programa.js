let estrelas1,estrelas2,estrelas3,estrelas4,titulo,caixa,sabonete,texto1,transicao1,cadeira1,cadeira2,cadeira3,casas,lixo,lixeiro,lixo1;

function inicio(){
  estrelas1 = document.querySelector(".estrelas1");
  estrelas2 = document.querySelector(".estrelas2");
  estrelas3 = document.querySelector(".estrelas3");
  estrelas4 = document.querySelector(".estrelas4");
  titulo = document.querySelector(".titulo");
  caixa = document.querySelector(".caixa");
  sabonete = document.querySelector(".sabonete");
  texto1 = document.querySelector(".texto1");
  texto2 = document.querySelector(".texto2");
  texto3 = document.querySelector(".texto3");
  texto4 = document.querySelector(".texto4");
  texto5 = document.querySelector(".texto5");
  transicao1 = document.querySelector(".transicao1");
  cadeira1 = document.querySelector(".cadeira1");
  cadeira2 = document.querySelector(".cadeira2");
  cadeira3 = document.querySelector(".cadeira3");
  casas = document.querySelector(".casas");
  lixo = document.querySelector(".lixo");
  lixeiro = document.querySelector(".lixeiro");
  lixo1 = document.querySelector(".lixo1");
  lixo2= document.querySelector(".lixo2");
  lixo3 = document.querySelector(".lixo3");
  maozinha = document.querySelector(".maozinha");

  animar();
}

function animar(){
  let t1 = clampCena(r, 0, 0.5);
  let t2 = clampCena(r, 0, 0.1);
  let t19 = clampCena(r, 0.1, 0.13);
  let t3 = clampCena(r, 0.1, 0.12);
  let t4 = clampCena(r, 0.12, 0.15);
  let t5 = clampCena(r, 0.2, 0.25);
  let t6 = clampCena(r, 0.21, 0.22);
  let t7 = clampCena(r, 0.2, 0.25);
  let t8 = clampCena(r, 0.3, 0.32);
  let t9 = clampCena(r, 0.35, 0.4);
  let t10 = clampCena(r, 0.42, 0.45);
  let t11 = clampCena(r, 0.45, 0.5);
  let t12 = clampCena(r, 0.52, 0.6);
  let t21 = clampCena(r, 0.6, 0.7);
  let t13 = clampCena(r, 0.61, 0.68);
  let t14 = clampCena(r, 0.672, 0.679);
  let t15 = clampCena(r, 0.7, 0.75);
  let t16 = clampCena(r, 0.75, 0.76);
  let t17 = clampCena(r, 0.76, 0.78);
  let t18 = clampCena(r, 0.76, 0.8);
  let t20 = clampCena(r, 0.13, 0.16);
  let t23 = clampCena(r, 0.7, 0.8);
  let t25 = clampCena(r, 0.8, 0.85);
  let t24 = clampCena(r, 0.9, 0.95);

  let y = lerp(t1, 0, 600);
  let y2 = lerp(t1, 0, 300);
  let y3 = lerp(t1, 0, 100);
  let y4 = lerp(t1, 0, 800);
  let y5 = lerp(t2, 0, -400);
  let y6 = lerp(t5, 1000, -1000);
  let y7 = lerp(t12, 1000, 0);
  let y8 = lerp(t13, 1000, 550);
  let y9 = lerp(t13, 0, -65);
  let y10 = lerp(t16, 1000, 0);
  let y11 = lerp(t17, 1000, 0);
  let y12 = lerp(t18, 1000, 0);

  let o1 = lerp(t6, 1, 0);
  let o2 = lerp(t8, 1, 0);
  let o3 = lerp(t9, 0, 1);
  let o4 = lerp(t10, 1, 0);
  let o5 = lerp(t11, 0, 1);
  let o6 = lerp(t2, 1, 0);
  let o7 = lerp(t2, 1, 0);
  let o8 = lerp(t24, 1, 0);
  let o9 = lerp(t25, 1, 0);

  let x1 = lerp(t4, 350, 100);
  let x2 = lerp(t4, 350, 350);
  let x3 = lerp(t4, -800, 100);
  let x7 = lerp(t20, -800, 100);
  let x4 = lerp(t7, -800, 100);
  let x5 = lerp(t15, -20, -1000);
  let x6 = lerp(t2, -900, 900);
  let x8 = lerp(t7, -900, 50);
  let x9 = lerp(t21, -900, 50);
  let x10 = lerp(t23, -900, 50);

  estrelas1.style.backgroundPosition = `center ${y}%`;
  estrelas2.style.backgroundPosition = `center ${y2}%`;
  estrelas3.style.backgroundPosition = `center ${y3}%`;
  estrelas4.style.backgroundPosition = `center ${y4}%`;
  titulo.style.opacity = `${o6}`;
  caixa.style.opacity = `${t3}`;
  if(t6>0) caixa.style.opacity = `${o1}`;
  caixa.style.left = `${x1}px`;
  sabonete.style.opacity = `${t4}`;
  if(t6>0) sabonete.style.opacity = `${o1}`;
  sabonete.style.left = `${x2}px`;
  texto1.style.right = `${x3}px`;
  if(t6>0) texto1.style.opacity = `${o1}`;
  texto2.style.right = `${x7}px`;
  if(t6>0) texto2.style.opacity = `${o1}`;
  texto3.style.right = `${x8}px`;
  if(t6>0) texto3.style.opacity = `${o1}`;
  texto4.style.right = `${x9}px`;
  if(t25>0) texto4.style.opacity = `${o9}`;
  texto5.style.right = `${x10}px`;
  if(t24>0) texto5.style.opacity = `${o8}`;
  transicao1.style.top = `${y6}px`;
  cadeira1.style.left = `${x4}px`;
  if(t8>0)cadeira1.style.opacity = `${o2}`;
  cadeira2.style.opacity = `${o3}`;
  if(t10>0)cadeira2.style.opacity = `${o4}`;
  cadeira3.style.opacity = `${o5}`;
  casas.style.top = `${y7}px`;
  lixo.style.top = `${y7}px`;
  if(t14>0)lixo.style.top = `${y9}px`;
  if(t15>0)lixo.style.left = `${x5}px`;
  lixeiro.style.top = `${y8}px`;
  if(t15>0)lixeiro.style.left = `${x5}px`;
  lixo1.style.top = `${y10}px`;
  lixo2.style.top = `${y11}px`;
  lixo3.style.top = `${y12}px`;
  maozinha.style.right = `${x6}px`;

  window.requestAnimationFrame(animar);
}

window.addEventListener("load", inicio);
