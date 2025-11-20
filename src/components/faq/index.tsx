
import styles from './styles.module.css';

interface FaqItem {
    pregunta: string;
    respuesta: string;
}

export default function Faq() {
    const faqItems: FaqItem[] = [
        {
            pregunta: "¿Qué es Daiana?",
            respuesta: "Daiana es una plataforma de inteligencia artificial que permite crear, entrenar y personalizar agentes conversacionales. Estos agentes pueden conectarse a múltiples fuentes de conocimiento como documentos, bases de datos o servicios en la nube para responder de forma precisa y contextual."
        },
        {
            pregunta: "¿Puedo entrenar a Daiana con mis propios documentos?",
            respuesta: "Sí. Puedes cargar archivos locales, conectar servicios de almacenamiento en la nube como OneDrive o Google Drive, o integrar bases de datos para que tus agentes tengan acceso a la información específica que necesiten."
        },
        {
            pregunta: "¿En qué canales se puede utilizar?",
            respuesta: "Daiana ofrece integraciones con canales de comunicación como WhatsApp y Microsoft Teams, así como la posibilidad de conectarse a futuras integraciones como Telegram o Discord. Además, puede enlazarse con diferentes fuentes de datos y APIs para ampliar sus capacidades."
        },
        {
            pregunta: "¿Puedo personalizar la apariencia del chat?",
            respuesta: "Sí. Daiana permite personalizar el color de cabecera, estilo y color de burbujas, texto, forma de la pestaña e incluso el avatar, para que el chat se adapte a la identidad visual de tu marca."
        }

    ];

    return (
        <div className={`${styles.faq} container`}>
            <div className='row'>
                <div className='col col--4'>
                    <h1>Preguntas frecuentes</h1>
                    <p>¡Bienvenido a la sección de preguntas frecuentes! Hemos recopilado una lista de preguntas frecuentes para ofrecerte respuestas rápidas e informativas.</p>
                    <p>Si quieres explorar todas las preguntas, ve a este enlace. Allí encontrarás todas las respuestas dadas por los usuarios.</p>
                    
                </div>
                <div className='col'>
                {faqItems.map((item, index) => (
                <div key={index.toString()} className={styles.accordionItem}>
                    <div 
                        className={styles.accordionHeader}
                        onClick={() => {
                            const content = document.getElementById(`content-${index}`);
                            const arrow = document.getElementById(`arrow-${index}`);
                            if (content && arrow) {
                                content.style.display = content.style.display === 'none' ? 'block' : 'none';
                                arrow.style.transform = content.style.display === 'none' ? 'rotate(0deg)' : 'rotate(90deg)';
                            }
                        }}
                        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                    >
                       
                        <svg id={`arrow-${index}`}data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.66 11.93">
                            <path d="M6.43,5.5L1.22.21C.94-.07.49-.07.21.21-.07.49-.07.94.21,1.22l4.72,4.78L.22,10.71c-.28.28-.28.73,0,1.01.14.14.32.21.51.21s.37-.07.51-.21l5.21-5.21c.28-.28.28-.73,0-1.01h-.02Z"/>
                        </svg>
                        
                        <span>{item.pregunta}</span>
                    </div>
                    <div 
                        id={`content-${index}`}
                        className={styles.accordionContent}
                        style={{ 
                            display: 'none',
                            padding: '10px',
                            marginLeft: '20px'
                        }}
                    >
                        {item.respuesta}
                    </div>
                </div>
            ))}
                </div>
            </div>
        </div>
    );
}