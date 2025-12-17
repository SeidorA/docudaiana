import type {ReactNode} from 'react';


export function Banerimg({ img }: { img?: string }): ReactNode {

    const imgprd = img ? '/img/' + img : 'banner.png'; // Default image if none provided
    return (
        <>
        <style>
            {`
                @media (max-width: 600px) {
                .banner-img {
                    width: 100% !important;
                    top: 10px !important;
                }
                }
            `}
        </style>

        <div  className="banercontainer"          
            style={{
            background: 'linear-gradient(180deg, #435EE2 0%, #66B6FF 100%)',
            height: '350px',
            width: '100%',
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative',
            marginBottom:  '20px',                
            }}
        >
            
            <img
            className="banner-img"
            src={imgprd}
            alt="Banner"
            style={{
                position: 'absolute',
                top: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%'
            }}
            />
        </div>
        </>
    );
}