<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	let { children } = $props();
</script>

<Header/>
<main class="bg-base1 min-h-desktop">
	{@render children()}
</main>

