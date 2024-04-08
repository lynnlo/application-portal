<script>
  let data = [
    {
      title: "C3 - Carousel",
      link: "https://661228982f17ff709dc01822--grecco-careers.netlify.app/",
    },
    {
      title: "C4 - Positions",
      link: "https://66122899b160546f39603fb8--grecco-careers.netlify.app/",
    },
    {
      title: "C7 - Application",
      link: "https://6612289db160546fac603e44--grecco-careers.netlify.app/",
    },
    {
      title: "C8 - Mobile Support",
      link: "https://6612289e0b5961700e2e3ed9--grecco-careers.netlify.app/",
    },
    {
      title: "C12 - Carousel Autoplay",
      link: "https://66122b0600c5bf760b0919eb--grecco-careers.netlify.app/",
    },
    {
      title: "C14 - Home Page Design",
      link: "https://66122316d96cd70008f26187--grecco-careers.netlify.app/",
    },
    {
      title: "C16 - About-Page Design",
      link: "https://6612231cf68ec4000828eee2--grecco-careers.netlify.app/",
    },
    {
      title: "C17 - Positions Card Redesign",
      link: "https://6612231f70ade80008aae17d--grecco-careers.netlify.app/",
    },
    {
      title: "C19 - About Journey",
      link: "https://66122324d951810008595fa1--grecco-careers.netlify.app/",
    },
    {
      title: "C21 - App Bar Redesign",
      link: "https://66122329f68ec4000828ef86--grecco-careers.netlify.app/",
    },
    {
      title: "C23 - Positions Page Redesign",
      link: "https://6612d63629f66a00088e22ed--grecco-careers.netlify.app/",
    },
    {
      title: "C24 - Registeration Rework",
      link: "https://6612e607967809000806f7e6--grecco-careers.netlify.app/",
    },
    {
      title: "C27 - Forgot Password Page",
      link: "https://6613274c4f0c6d0008c71180--grecco-careers.netlify.app/",
    },
    {
      title: "C27 - Optimizations",
      link: "https://66132a982f17ff1859c01875--grecco-careers.netlify.app/",
    },
  ];

  let page = 1;
</script>

<div class="container">
  <button on:click={() => (page = Math.max(page - 1, 1))}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-arrow-left"
      ><line x1="19" y1="12" x2="5" y2="12"></line><polyline
        points="12 19 5 12 12 5"
      ></polyline></svg
    >
  </button>
  <h1 style="width: 30vw; text-align: center;">{data[page - 1].title}</h1>
  <button on:click={() => (page = Math.min(page + 1, data.length))}
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-arrow-right"
      ><line x1="5" y1="12" x2="19" y2="12"></line><polyline
        points="12 5 19 12 12 19"
      ></polyline></svg
    ></button
  >
</div>
{#each data as { title, link }, i}
  <iframe
    class="full"
    style="z-index: {i + 1 === page ? 10 : 0};"
    src={link}
    {title}
  ></iframe>
  <br />
{/each}

<style>
  .container {
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 10vh;
  }

  button {
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
  }

  .full {
    width: 100%;
    height: 90vh;
    position: absolute;
    bottom: 0;
    left: 0;
    border: none;
  }
</style>
