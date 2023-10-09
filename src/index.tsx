import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
  currentSection: number;
  totalSections: number;
  finalAction?: () => void;
  onCurrentSectionChange: (section: number) => void;
  children?: React.ReactNode;
  nextBtnDisabled?: boolean;
  backBtnDisabled?: boolean;
  addClass?: string;
  backClass?: string;
  nextClass?: string;
  actionClass?: string;
  commonBtnClass?: string;
  backName?: string;
  nextName?: string;
  actionName?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentSection = 1,
  totalSections = 3,
  finalAction,
  onCurrentSectionChange,
  nextBtnDisabled = false,
  backBtnDisabled = false,
  addClass,
  backClass,
  nextClass,
  actionClass,
  commonBtnClass,
  backName = 'Back',
  nextName = 'Next',
  actionName = 'Finish',
  children,
}) => {
  const [currentSectionState, setCurrentSectionState] =
    useState(currentSection);
  const [ariaLiveContent, setAriaLiveContent] = useState<string>('');

  const progressBarWidth = `${(currentSectionState / totalSections) * 100}%`;

  const nextBtnDisabledState = currentSectionState === totalSections;

  const changeSection = (action: 'prev' | 'next') => {
    if (action === 'prev' && currentSectionState > 1) {
      setCurrentSectionState((prev) => prev - 1);
      onCurrentSectionChange(currentSectionState - 1);
      setAriaLiveContent(`navigated to section ${currentSectionState - 1}`);
    } else if (action === 'next' && currentSectionState < totalSections) {
      setCurrentSectionState((prev) => prev + 1);
      onCurrentSectionChange(currentSectionState + 1);
      setAriaLiveContent(`navigated to section ${currentSectionState + 1}`);
    }
  };

  useEffect(() => {
    // Use a setTimeout to clear the ARIA live region after a brief delay
    const timer = setTimeout(() => {
      setAriaLiveContent('');
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [ariaLiveContent]);

  return (
    <div className={`progress-bar ${addClass ? addClass : ''}`}>
      <div
        className='common-progress'
        role='progressbar'
        aria-valuemin={1}
        aria-valuemax={totalSections}
        aria-valuenow={currentSectionState}
        aria-valuetext={`Section ${currentSectionState} of ${totalSections}`}
        aria-live='polite'
      >
        <div
          className='common-progress-bar'
          style={{
            width: progressBarWidth,
          }}
        />
      </div>
      {children}
      <div className='progress-btn-block'>
        <button
          className={`btn ${backClass ? backClass : ''} ${
            commonBtnClass ? commonBtnClass : ''
          }`}
          disabled={backBtnDisabled || currentSectionState === 1}
          onClick={() => changeSection('prev')}
        >
          {backName}
        </button>
        <button
          className={`btn ${nextClass ? nextClass : ''} ${
            commonBtnClass ? commonBtnClass : ''
          }`}
          disabled={nextBtnDisabledState || nextBtnDisabled}
          onClick={() => changeSection('next')}
        >
          {nextName}
        </button>
        <button
          className={`btn ${actionClass ? actionClass : ''} ${
            commonBtnClass ? commonBtnClass : ''
          }`}
          onClick={finalAction}
          disabled={!nextBtnDisabledState}
        >
          {actionName}
        </button>
      </div>
      <div
        className='aria-live-region'
        aria-live='polite'
        aria-atomic='true'
        style={{ position: 'absolute', left: '-9999px' }}
      >
        {ariaLiveContent}
      </div>
    </div>
  );
};
