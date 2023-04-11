<script>
  import { nouns } from '$lib/nouns.js';
  import { randomNumber } from '$lib/utilities.js';

  let buttonLabel = 'Click for a Random Band Name!';
  
  const handleClick = () => {
    buttonLabel = nouns[randomNumber(nouns.length)];
  }

</script>

<h1>Random Band Name Generator</h1>
<button on:click={handleClick}>{buttonLabel}</button>
