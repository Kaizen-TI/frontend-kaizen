    <!-- component -->

<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />

<!-- ====== Pricing Section Start -->

<!-- ====== Pricing Section End -->

        <script>

let elements = document.querySelectorAll("[data-menu]");
for (let i = 0; i < elements.length; i++) {
let main = elements[i];

    main.addEventListener("click", function () {
        let element = main.parentElement.parentElement;
        let indicators = main.querySelectorAll("img");
        let child = element.querySelector("#menu");
        let h = element.querySelector("#mainHeading>div>p");

        h.classList.toggle("font-semibold");
        child.classList.toggle("hidden");
        // console.log(indicators[0]);
        indicators[0].classList.toggle("rotate-180");
    });

}
</script>



<script>
	// ...
	// extend: {
    //   keyframes: {
    //     fadeIn: {
    //       "0%": { opacity: 0 },
    //       "100%": { opacity: 100 },
    //     },
    //   },
    //   animation: {
    //     fadeIn: "fadeIn 0.2s ease-in-out forwards",
    //   },
    // },
    // ...
</script>