const letra = "a";

const pokemones = `audino bagon baltoy banette bidoof braviary bronzor carracosta charmeleon
cresselia croagunk darmanitan deino emboar emolga exeggcute gabite girafarig
gulpin haxorus heatmor heatran ivysaur jellicent jumpluff kangaskhan kricketune
landorus ledyba loudred lumineon lunatone machamp magnezone mamoswine
nosepass petilil pidgeotto pikachu pinsir poliwrath poochyena porygon2 porygonz
registeel relicanth remoraid rufflet sableye scolipede scrafty seaking sealeo silcoon
simisear snivy snorlax spoink starly tirtouga trapinch treecko tyrogue vigoroth vulpix
wailord wartortle whismur wingull yamas`;

const arrPokemones = pokemones.split(" ");

let firstPokemon = arrPokemones[0];

function filterArray(inputArr) {
  var found = {};
  var out = inputArr.filter(function (element) {
    return found.hasOwnProperty(element) ? false : (found[element] = true);
  });
  return out;
}


const nextSubPokemon = (arr) => {
  const newSequence = [];
  arr.forEach((item, index) => {
    let firstPokemon = arr[index];
    let firstLetterPokemon = firstPokemon[firstPokemon.length - 1];
    // console.log({
    //   firstPokemon,
    //   firstLetterPokemon,
    // });
    for (let i = 1; i < arr.length; i++) {
      let secondPokemon = arr[i];
      let secondLetterPokemon = secondPokemon[0];
      if (firstLetterPokemon === secondLetterPokemon) {
        newSequence.push(firstPokemon);
      }
    }
  });
  return filterArray(newSequence);
};

const result = nextSubPokemon(arrPokemones);
console.log(result);
