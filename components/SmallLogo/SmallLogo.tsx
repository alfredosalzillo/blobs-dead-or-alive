import classes from './SmallLogo.module.scss';

const SmallLogo = () => (
  <span className={classes.root}>
    <svg
      viewBox="40 40 130 130"
    >
      <path
        d="M66.44239489886886,41.8765229845084C82.19654898723068,33.102333661316145,163.60308750832021,81.53856450755914,164.13024112417628,100C164.65739474003234,118.46143549244086,85.88662429822321,162.3323821084021,69.6053165940053,152.6451359391535C53.32400888978739,142.9578897699049,50.688240810507025,50.65071230770065,66.44239489886886,41.8765229845084C82.19654898723068,33.102333661316145,163.60308750832021,81.53856450755914,164.13024112417628,100"
        strokeWidth="2"
        stroke="hsl(24, 81%, 2%)"
        fill="hsl(24, 81%, 82%)"
      />
      <g>
        <g transform="matrix(1,0,0,1,100,100)">
          <circle
            r="28"
            cx="0"
            cy="0"
            strokeWidth="2"
            stroke="hsl(24, 81%, 2%)"
            fill="hsl(24, 81%, 98%)"
            className="blob-eye-iris"
          />
          <circle
            r="14"
            cx="0"
            cy="0"
            fill="hsl(24, 81%, 2%)"
          />
        </g>
      </g>
    </svg>
  </span>
);

export default SmallLogo;