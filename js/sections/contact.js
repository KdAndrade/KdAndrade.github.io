import { profile } from '../data/projects.js';
export const contact = /* HTML */ `
  <section id="contact" class="container section contact">
    <div>
      <p class="command">
        <span>$</span>
        contact --info
      </p>
      <h2>
        Let’s talk
        <br />
        <span>backend.</span>
      </h2>
      <p>Have a project or a development opportunity in mind?</p>
      <a class="button" href="${profile.github}" target="_blank" rel="noopener noreferrer">
        Find me on GitHub
      </a>
    </div>
    <dl class="contact-list">
      <div>
        <dt class="mono">Location</dt>
        <dd>
          Belo Horizonte Metropolitan Area
          <br />
          Minas Gerais, Brazil
        </dd>
      </div>
      <div>
        <dt class="mono">GitHub</dt>
        <dd>
          <a href="${profile.github}" target="_blank" rel="noopener noreferrer">@KdAndrade</a>
        </dd>
      </div>
      <div>
        <dt class="mono">LinkedIn</dt>
        <dd>
          ${profile.linkedin ? `<a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn profile</a>` : '<span class="pending">Link to be added</span>'}
        </dd>
      </div>
      <div>
        <dt class="mono">Email</dt>
        <dd>
          ${profile.email ? `<a href="mailto:${profile.email}">${profile.email}</a>` : '<span class="pending">Address to be added</span>'}
        </dd>
      </div>
    </dl>
  </section>
`;
