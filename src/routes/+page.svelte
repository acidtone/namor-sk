<script>
  import { nouns } from '$lib/nouns.js';
  import { randomNumber } from '$lib/utilities.js';

  console.log(nouns);

  const randIndex = randomNumber(nouns.length);

  console.log(randIndex);

  console.log(nouns[randIndex]);

  const handleClick = () => {
    console.log("Hello world");
  }

</script>

<h1>Random Band Name Generator</h1>
<button on:click={handleClick}>Click for a Random Band Name!</button>
