<script>
	import Testimonials1Fallback from '$lib/images/testimonials1.png?width=328&format=jpg&srcset';
	import Testimonials1Webp from '$lib/images/testimonials1.png?width=328&format=webp&srcset';
	import Testimonials1Avif from '$lib/images/testimonials1.png?width=328&format=avif&srcset';

	import Testimonials2Fallback from '$lib/images/testimonials2.png?width=328&format=jpg&srcset';
	import Testimonials2Webp from '$lib/images/testimonials2.png?width=328&format=webp&srcset';
	import Testimonials2Avif from '$lib/images/testimonials2.png?width=328&format=avif&srcset';
</script>

<section class="bg-white text-primary">
	<div class="container mx-auto py-20 space-y-8 border-y-2 border-primary">
		<div class="text-center space-y-2">
			<h2 class="text-4xl leading-10 font-extrabold md:w-[20ch] xl:w-auto mx-auto uppercase">
				Let Your Smile Speak for You
			</h2>
			<p class="font-bold text-secondary text-xl leading-8 uppercase">Our patients love us</p>
		</div>
		<div class="flex flex-col md:flex-row items-center justify-center md:items-end">
			<div class="z-10 max-w-[80%]">
				<picture>
					<source srcset={Testimonials1Avif} type="image/avif" />
					<source srcset={Testimonials1Webp} type="image/webp" />
					<img
						loading="lazy"
						decoding="async"
						src={Testimonials1Fallback}
						alt="Testimonial"
						class="w-[328px] aspect-square"
					/>
				</picture>
			</div>
			<div
				class="brandGradientVariant -mt-12 md:mt-0 ml-0 md:-ml-36 max-h-64 max-w-md w-5/6 md:max-w-xl md:mb-[3.75rem] text-primary rounded-[2.5rem] px-6 md:pl-44 pt-12 pb-8"
			>
				<h2 class="font-extrabold leading-5 text-base">Kely</h2>
				<p class="text-lg italic font-light text-justify md:text-start">
					"I feel like a completely different person now! My confidence has skyrocketed and I can’t
					stop laughing. It’s so great."
				</p>
			</div>
		</div>
		<div class="flex flex-col md:flex-row-reverse items-center justify-center md:items-end">
			<div class="z-10 max-w-[80%]">
				<picture>
					<source srcset={Testimonials2Avif} type="image/avif" />
					<source srcset={Testimonials2Webp} type="image/webp" />
					<img
						loading="lazy"
						decoding="async"
						src={Testimonials2Fallback}
						alt="Testimonial"
						class="w-[328px] aspect-square"
					/>
				</picture>
			</div>
			<div
				class="brandGradientVariant -mt-12 md:mt-0 mr-0 md:-mr-36 max-h-64 max-w-md w-5/6 md:max-w-xl md:mb-[3.75rem] text-primary rounded-[2.5rem] px-6 md:pr-44 md:pl-10 pt-12 pb-8"
			>
				<h2 class="font-extrabold leading-5 text-base">Robert</h2>
				<p class="text-lg italic font-light text-justify md:text-start">
					"This transformation has been life-changing! I’m so much happier and my confidence is
					through the roof."
				</p>
			</div>
		</div>
	</div>
</section>
