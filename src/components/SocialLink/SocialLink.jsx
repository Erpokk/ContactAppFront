import css from './SocialLink.module.css'
import socialLinksData from '../../data/socialLink.json'

export const SocialLinks = ({ links = socialLinksData }) => {
    return (
      <ul className={css.socialList}>
        {links.map(({ id, href, label }) => (
          <li key={id}>
            <a
            className={css.socialLink}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${label} site`}
            >
              <svg width="28" height="28">
                <use href={`/icons.svg#${id}`}></use>
              </svg>
            </a>
          </li>
        ))}
      </ul>
    );
  };