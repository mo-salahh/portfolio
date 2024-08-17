import React from "react";

export interface QualificationItemProps {
  title: string;
  subtitle: string;
  period: string;
  isLast: boolean;
  index: number;
}

const QualificationItem: React.FC<QualificationItemProps> = ({
  title,
  subtitle,
  period,
  isLast,
  index,
}) => {
  const isLeftAligned = index % 2 === 0;

  return (
    <div className="qualification__data">
      <div>
        {isLeftAligned && (
          <>
            <h3 className="qualification__title">{title}</h3>
            <span className="qualification__subtitle">{subtitle}</span>
            <div className="qualification__calender">
              <i className="uil uil-calendar-alt"></i>
              {period}
            </div>
          </>
        )}
      </div>

      <div>
        {!isLast ? (
          <>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </>
        ) : (
          <>
            <span className="qualification__rounder"></span>
          </>
        )}
      </div>

      <div>
        {!isLeftAligned && (
          <>
            <h3 className="qualification__title">{title}</h3>
            <span className="qualification__subtitle">{subtitle}</span>
            <div className="qualification__calender">
              <i className="uil uil-calendar-alt"></i>
              {period}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QualificationItem;
