<script>
  import { nouns } from '$lib/nouns.js';
  import { randomNumber } from '$lib/utilities.js';

  console.log(nouns);
  console.log(randomNumber(nouns.length));
  console.log(nouns[randomNumber(nouns.length)]);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
