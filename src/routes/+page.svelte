
<script>
    import Icon from '@iconify/svelte';
    import githubIcon from '@iconify-icons/simple-icons/github';

    let name = "Simon Burleson";
    let bio = "I'm a software engineer with a passion for Sports, the Outdoors, and Video Games. I enjoy creating projects that combine these interests as shown in my projects.";

    let projects = [
        {
        title: "Statistics Website",
        description: "A website that enables players to upload Replay files to cloud storage, process them through a Rust based script, and display the extracted data in a meaningful way.",
        github: "https://github.com/Sburleson/WoTFirebase",
        images: ["/images/portfolio1.png"],
        website: "https://wot-insight.web.app"
        },
        {
        title: "Track & Field Timing using machine learning",
        description: "A project that uses machine learning to analyze video footage of track and field events, providing accurate timing at a fraction of the cost of traditional timing systems.",
        github: "https://github.com/Sburleson/TrackTiming",
        images: ["/images/ml1.png", "/images/ml2.png"]
        }
    ];

    let skills = [
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "Python", icon: "logos:python" },
    { name: "Rust", icon: "logos:rust" },
    { name: "SQL", icon: "vscode-icons:file-type-sql" },
    { name: "Docker", icon: "logos:docker-icon" },
    { name: "Machine Learning", icon: "mdi:robot-outline" },
    { name: "Web Development", icon: "mdi:web" }
  ];
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: sans-serif;
  }

  .layout {
    display: flex;
    height: 100vh;
  }

  .sidebar {
    width: 500px;
    background-color: #466eb8;
    color: white;
    padding: 20px;
    box-sizing: border-box;
  }

  .sidebar img {
    display: block;
    width: 75%;
    border-radius: 20%;
    margin: 0 auto 20px;
    margin-top: 20%;
  }

  .sidebar h1 {
    font-size: 1.5rem;
  }

  .sidebar nav a {
    display: block;
    margin: 10px 0;
    color: white;
    text-decoration: none;
  }

  .skill {
    display: inline-flex;
    align-items: center;
    margin-right: 12px;   /* space between items */
    margin-bottom: 8px;   /* space between rows */
    padding: 4px 8px;
    background-color: #e6e6e6;
    border-radius: 6px;
  }

  .content {
    flex: 1;
    padding: 30px;
    background-color: #fdffff;
    overflow-y: auto;
  }

  .project-card {
    background-color: #466eb8;
    color: white;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  }

  .project-card a {
    color: #ffffff;
    text-decoration: underline;
    display: inline-block;
    margin-top: 0.5rem;
  }

  .project-images {
    display: flex;
    gap: 10px;
    margin-top: 10px;
    flex-wrap: wrap;
  }

  .project-images img {
    width: 100%;
    max-width: 300px;
    border-radius: 6px;
    box-shadow: 1px 1px 6px rgba(0,0,0,0.2);
  }

  .project-links {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 10px;
}

.project-links a {
  text-decoration: none;
  color: white;
  background-color: #333;
  padding: 6px 10px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s ease;
  width: fit-content;
}

.project-links a:hover {
  background-color: #555;
}
</style>

<div class="layout">
  <!-- Sidebar -->
  <aside class="sidebar">
    <h1>{name}</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>

    <img src="/MePic2.png" alt="Profile Picture" />
  </aside>

  <!-- Main Content -->
  <main class="content">
    <section id="about">
      <h2>About Me</h2>
      <p>{bio}</p>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      {#each projects as project}
        <div class="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
             <div class="project-links">
                {#if project.website}
                    <a href={project.website} target="_blank" rel="noopener noreferrer">
                    🌐 View Website
                    </a>
                {/if}

                {#if project.github}
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Icon icon={githubIcon} width="20" height="20" style="vertical-align: middle;" />
                    GitHub Repo
                    </a>
                {/if}
            </div>
            {#if project.images && project.images.length}
                <div class="project-images">
                {#each project.images as img}
                    <img src={img} alt="{project.title} screenshot" />
                {/each}
                </div>
          {/if}
        </div>
      {/each}
    </section>

    <section id="skills">
      <h2>Skills</h2>
      {#each skills as skill}
        <span class="skill">
            <Icon icon={skill.icon} width="16" height="16" />
            {skill.name}
        </span>
      {/each}
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:simon@example.com">simon@example.com</a></p>
    </section>
  </main>
</div>