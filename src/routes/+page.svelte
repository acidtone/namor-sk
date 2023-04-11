<script>
  import { generatePhrase } from '$lib/phraser.js';

  let buttonLabel = 'Click for a Random Band Name!';
  
  const handleClick = () => {
    buttonLabel = generatePhrase();
    console.log(buttonLabel);
  }

</script>

<h1>Random Band Name Generator</h1>
<button on:click={handleClick}>{buttonLabel}</button>
