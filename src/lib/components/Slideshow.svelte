<script>
	import Hero1Fallback from '$lib/images/hero-frame1.png?width=1600';
	import Hero1Webp from '$lib/images/hero-frame1.png?width=800;400;200&format=webp&srcset';
	import Hero1Avif from '$lib/images/hero-frame1.png?width=800;400;200&format=avif&srcset';
	import Hero1Jpg from '$lib/images/hero-frame1.png?width=800;400;200&format=jpg&srcset';

	import Hero2Fallback from '$lib/images/hero-frame2.png?width=1600';
	import Hero2Webp from '$lib/images/hero-frame2.png?width=800;400;200&format=webp&srcset';
	import Hero2Avif from '$lib/images/hero-frame2.png?width=800;400;200&format=avif&srcset';
	import Hero2Jpg from '$lib/images/hero-frame2.png?width=800;400;200&format=jpg&srcset';

	//To be updated too on CSS sections bellow
	const widthBase = '80vw';
	const widthLarge = '60vw';
	const HeroBreakpoint = '640px';

	const sizes = `(min-width: ${HeroBreakpoint}) ${widthBase}, ${widthLarge}`;
</script>

<div class="slides">
	<div class="img-container">
		<picture>
			<source srcset={Hero2Avif} type="image/avif" />
			<source srcset={Hero2Webp} type="image/webp" />
			<source srcset={Hero2Jpg} type="image/jpg" />
			<img {sizes} loading="eager" decoding="async" src={Hero2Fallback} alt="Smile Design" />
		</picture>
	</div>
	<div class="img-container">
		<picture>
			<source srcset={Hero1Avif} type="image/avif" />
			<source srcset={Hero1Webp} type="image/webp" />
			<source srcset={Hero1Jpg} type="image/jpg" />
			<img {sizes} loading="eager" decoding="async" src={Hero1Fallback} alt="Smile Design" />
		</picture>
	</div>
</div>

<style>
	/* @media (max-width: 768px){

	} */
	.slides {
		display: flex;
		overflow: hidden;

		/* width: 100%;
		height: 100%; */

		width: 80vw;
		height: 80vw;
	}
	img {
		max-width: 80vw;
		height: 100%;
		max-width: 46.25rem;
		max-height: 46.25rem;
	}

	@media (min-width: 640px) {
		.slides {
			width: 60vw;
			height: 60vw;
			max-width: 46.25rem;
			max-height: 46.25rem;
		}
	}
	@media (min-width: 768px) {
		.slides {
			width: 43.5rem;
			height: 43.5rem;
		}
	}

	.slides > * {
		flex-shrink: 0;
		width: 100%;
		margin-left: 0%;
	}
	.slides > *:nth-child(1) {
		animation: 6s autoplay infinite ease-in-out;
	}
	@keyframes autoplay {
		0% {
			margin-left: 0%;
		}
		30% {
			margin-left: 0%;
		}
		39% {
			margin-left: -100%;
		}
		80% {
			margin-left: -100%;
		}
		89% {
			margin-left: 0%;
		}
		100% {
			margin-left: 0%;
		}
	}

	.img-container {
		position: relative;
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		max-width: 100%;
		height: auto;
		object-fit: cover;
	}
</style>
