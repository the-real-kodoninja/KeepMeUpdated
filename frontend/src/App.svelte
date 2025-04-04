<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let feeds = [
    { id: 1, title: "AOC Slams Policy", source: "X", content: "Big news today...", media: "https://via.placeholder.com/300x200", timestamp: "2h ago" },
    { id: 2, title: "Tech Breakthrough", source: "TechCrunch", content: "AI just got sexier.", media: null, timestamp: "5h ago" },
  ];

  let isLoggedIn = false;
  let scrolled = false;

  function login() {
    isLoggedIn = true;
  }

  onMount(() => {
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        feeds = [...feeds, { id: feeds.length + 1, title: "New Post", source: "Blog", content: "More content!", media: null, timestamp: "Now" }];
      }
      scrolled = window.scrollY > 50;
    });
  });
</script>

<main class="main">
  {#if !isLoggedIn}
    <div class="login-container" transition:fade>
      <div class="login-content">
        <h1 class="gradient-text title">
          KeepMeUpdated
        </h1>
        <button on:click={login} class="login-button">
          Login
        </button>
      </div>
    </div>
  {:else}
    <header class="header" class:scrolled>
      <h1 class="gradient-text logo">
        KMU
      </h1>
      <button class="logout-button">
        Logout
      </button>
    </header>

    <div class="feed-container">
      {#each feeds as feed (feed.id)}
        <div
          class="feed-card"
          in:fade={{ delay: 100 * feed.id }}
          on:mouseenter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
          on:mouseleave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <h2 class="feed-title">{feed.title}</h2>
          <p class="feed-meta">{feed.source} • {feed.timestamp}</p>
          <p class="feed-content">{feed.content}</p>
          {#if feed.media}
            <img src={feed.media} alt="media" class="feed-media" />
          {/if}
          <div class="feed-actions">
            <button class="action-button like">Like</button>
            <button class="action-button save">Save</button>
            <button class="action-button share">Share</button>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</main>

<style>
  :global(body) {
    background-color: #f5f5f5;
    color: #1a1a1a;
    font-family: sans-serif;
    margin: 0;
  }

  .main {
    min-height: 100vh;
    padding: 1rem;
  }

  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .login-content {
    text-align: center;
  }

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    animation: pulse 2s infinite;
  }

  .gradient-text {
    background: linear-gradient(135deg, #8a3ab9, #e95950, #4c68d7);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .login-button {
    padding: 0.75rem 2rem;
    border-radius: 9999px;
    background: linear-gradient(135deg, #e95950, #8a3ab9);
    color: white;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.2s;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .login-button:hover {
    transform: scale(1.05);
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0.75rem;
    background: rgba(245, 245, 245, 0.8);
    backdrop-filter: blur(4px);
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: opacity 0.3s;
  }

  .header.scrolled {
    opacity: 0;
  }

  .logo {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .logout-button {
    font-size: 0.875rem;
    padding: 0.25rem 1rem;
    border-radius: 9999px;
    border: 1px solid #8a3ab9;
    color: #8a3ab9;
    background: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .logout-button:hover {
    background: #8a3ab9;
    color: white;
  }

  .feed-container {
    margin-top: 4rem;
    max-width: 32rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .feed-card {
    padding: 1.25rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    animation: cardFadeIn 0.5s ease-out;
  }

  .feed-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(139, 58, 185, 0.1);
  }

  .feed-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1a1a1a;
  }

  .feed-meta {
    font-size: 0.875rem;
    color: #6b7280;
  }

  .feed-content {
    margin-top: 0.5rem;
    color: #374151;
  }

  .feed-media {
    margin-top: 0.75rem;
    border-radius: 0.375rem;
    width: 100%;
    height: 12rem;
    object-fit: cover;
    transition: transform 0.3s;
  }

  .feed-media:hover {
    transform: scale(1.02);
  }

  .feed-actions {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    font-size: 0.875rem;
  }

  .action-button {
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.3s;
  }

  .like:hover {
    color: #8a3ab9;
  }

  .save:hover {
    color: #e95950;
  }

  .share:hover {
    color: #4c68d7;
  }

  @keyframes cardFadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }
</style>
