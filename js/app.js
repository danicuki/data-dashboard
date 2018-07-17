/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

var baseSelect = document.getElementById('baseSelect');
var generationSelect = document.getElementById('generationSelect');

for (base of Object.keys(data)) {
  var newOpt = document.createElement('option');
  newOpt.setAttribute('value', base);
  newOpt.textContent = base;
  baseSelect.appendChild(newOpt);  
}

baseSelect.addEventListener('change', function(event) {
  generationSelect.innerHTML = '';
  for (generation of Object.keys(data[baseSelect.value])) {
    var newOpt = document.createElement('option');
    newOpt.setAttribute('value', generation);
    newOpt.textContent = generation;
    generationSelect.appendChild(newOpt);
  }  
  selectGeneration(baseSelect.value, generationSelect.value);
});

generationSelect.addEventListener('change', function(event) {
  selectGeneration(baseSelect.value, generationSelect.value);
});

function selectGeneration(base, generation) {
  document.getElementById('totalStudents').textContent = studentsTotal(base, generation);
  document.getElementById('giveupStudents').textContent = giveupCount(base, generation);
}

function students(base, gen) {
  return data[base][gen]['students'];
}

function giveupCount(base, gen) {
  return students(base, gen).filter(x => !x.active).length;
}

function studentsTotal(base, gen) {
  return students(base, gen).length;
}



    // A porcentagem de alunas desistentes
    // O número de alunas que excedem a meta de pontos, em média, de todos os sprints realizados. O objetivo dos pontos é 70% do total de pontos em HSE e em tecnologia.
    // A porcentagem que representa os dados anteriores em relação ao total de alunas.

    // O Net Promoter Score (NPS) médio dos sprints realizados. O NPS é calculado com base no levantamento que as estudantes respondem em relação à recomendação que dariam da Laboratoria, sob a seguinte fórmula:

    // [Promoters] = [Respostas 9 ou 10] / [Total respostas] * 100
    // [Passive] = [Respostas 7 a 8] / [Total Respostas] * 100
    // [Detractors] = [Respostas entre 1 e 6] / [Total Respostas] * 100

    // [NPS] = [Promoters] - [Detractors]

    // A quantidade e porcentagem que representa o total de alunas que excedem a meta de pontos técnicos em média e sprint.
    // O valor e a porcentagem que representam o número total de alunas que excedem a meta de pontos de HSE, em média, e por sprint.
    // O percentual de alunas satisfeitas com a experiência da Laboratoria.
    // A pontuação média das professoras.
    // A pontuação média das mestres Jedi.
