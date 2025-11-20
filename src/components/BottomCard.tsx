'use client';
import AnimatedBadge from '../components/AnimatedBadge';
const outerWrapper = {
  position: 'relative',
  width: '216px',
  height: '84px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const backgroundLayer = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: 'url("/btn-bg.png")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 0,
};

const buttonStyle = {
  position: 'relative',
  zIndex: 1,
  background: 'linear-gradient(90deg, #FF692E 0%, #8D5CF6 100%)',
  color: 'white',
  fontWeight: 700,
  fontSize: '20px',
  border: 'none',
  borderRadius: '9999px',
  width:'188px',
  height:'56px',
  cursor: 'pointer',
  top:'-7px',
  letterSpacing: '0.5px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};

export default function BottomCard({
  subhead,
  heading,
  paragraph,
  paragraph2,
  CTA1,
  CTA2
}) {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-[20px] w-full pastel-gradient-bg flex items-center justify-center px-6 py-16 mb-25 sm:px-8 lg:px-12">
          
          <div className="max-w-4xl w-full text-center">
            {subhead && (
  <AnimatedBadge text={subhead} className="mb-8" />
  

)}
            <h2 className="text-[42px] font-semibold text-black mb-4 sm:mb-6 leading-tight tracking-tight">
              {heading}
            </h2>

            <div className="text-[20px] text-black mb-8 sm:mb-8 leading-relaxed">
              <p className="mb-0.5">{paragraph}</p>
               {paragraph2 && (
   <p>{paragraph2}</p>
)}
             
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-1">

              <div style={outerWrapper}>
                <div style={backgroundLayer}></div>
                
                <button
                  style={buttonStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  {CTA1}
                </button>
              </div>

              <div className="gradient-border-wrapper">
                <button className="getStartedBtn">
                  {CTA2}
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
