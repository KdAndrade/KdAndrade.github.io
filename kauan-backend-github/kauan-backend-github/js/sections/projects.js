import { projects } from '../data/projects.js';

const backendLayers = /* HTML */ `
  <div class="layers mono">
    <span>Controller</span>
    <span>Service</span>
    <span>Repository</span>
    <span>PostgreSQL</span>
  </div>
`;

const tags = (items) => /* HTML */ `
  <ul class="tags">
    ${items
      .map(
        (t) => /* HTML */ `
          <li>${t}</li>
        `,
      )
      .join('')}
  </ul>
`;
export const projectSection = /* HTML */ `
  <section id="projects" class="projects-wrap">
    <div class="container section">
      <div class="section-heading">
        <div>
          <p class="command">
            <span>$</span>
            ls ./projects
          </p>
          <h2>Code with a purpose.</h2>
        </div>
        <span class="small mono">Selected projects / backend</span>
      </div>
      <div class="project-list">
        ${projects
          .map(
            (p) => /* HTML */ `
              <article class="project ${p.featured ? 'featured' : ''}">
                <div class="project-top">
                  <span class="mono small">${p.number} / ${p.type}</span>
                  <span class="mono small">${p.role}</span>
                </div>
                <div class="project-main">
                  <div>
                    <h3>${p.name}</h3>
                    <p class="project-summary">${p.summary}</p>
                    <p>${p.description}</p>
                    ${tags(p.stack)}
                    <a class="repo-link" href="${p.repo}" target="_blank" rel="noopener noreferrer">
                      View repository
                    </a>
                  </div>
                  <div class="project-architecture">
                    <p class="eyebrow mono">Backend architecture</p>
                    <p>${p.architecture}</p>
                    ${p.featured ? backendLayers : ''}
                  </div>
                </div>
                <details ${p.featured ? 'open' : ''}>
                  <summary>
                    Implementation notes
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div class="case-grid">
                    <div>
                      <h4>My contribution</h4>
                      <ul>
                        ${p.work
                          .map(
                            (w) => /* HTML */ `
                              <li>${w}</li>
                            `,
                          )
                          .join('')}
                      </ul>
                    </div>
                    <div>
                      <h4>Technical challenge</h4>
                      <p>${p.challenge}</p>
                    </div>
                  </div>
                </details>
              </article>
            `,
          )
          .join('')}
      </div>
    </div>
  </section>
`;
