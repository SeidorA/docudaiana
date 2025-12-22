import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import style from './price.module.css';
import { CaralIcon } from 'iconcaral2';

export default function Pricing(): ReactNode {
  return (
    <Layout>
       
      <div className={style.pricingContainer}>
        <div className={`${style.licencia} ${style.row}`}>
            <h2>Licencia</h2>
        </div>
        <div className={`${style.Enterprise} ${style.row}`}>
            <h2>Enterprise</h2>
        </div>
        <div className={`${style.studio} ${style.row}`}>
            <h2>Studio</h2>
        </div>
        
    

        <div className={style.rowcont} style={{gridRow: 2, gridColumn: 1}}>
            <p>Planes</p>
        </div>
        <div className={`${style.rowcont} ${style.planeso}`}  style={{gridRow: 2, gridColumn: 2}}>
            <Price size='small' color='#66B6FF' />
            <Price size='medium' color='#263C7A' />
            <Price size='large' color='#07153A' />
        </div>
        <div className={`${style.rowcont} ${style.planeso}`}  style={{gridRow: 2, gridColumn: 3}}>
            <Price size='small' color='#66B6FF' />
            <Price size='medium' color='#0191FF' />
            <Price size='large' color='#006ABB' />
        </div>

        <div className={style.rowcont} style={{gridRow: 3, gridColumn: 1}}>
            <p>Usuarios</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 3, gridColumn: 2}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <p>Usuarios Administradores ilimitados</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 3, gridColumn: 3}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <p>Usuarios Administradores ilimitados</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 4, gridColumn: 1}}>
            <p>Chatbots</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 4, gridColumn: 2}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <p>Ilimitados</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 4, gridColumn: 3}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <p>Ilimitados</p>
            <CaralIcon name='plus' size={20} color='#0191FF' />
            <p>(interfaz enriquecida)</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 5, gridColumn: 1}}>
            Conexión con archivos
        </div>
        <div className={style.rowcont} style={{gridRow: 5, gridColumn: 2}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <p>Incluido</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 5, gridColumn: 3}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <p>Incluido</p>
        </div>

        <div className={style.rowcont} style={{gridRow: 6, gridColumn: 1}}>
            Conexión a DB
        </div>
        <div className={style.rowcont} style={{gridRow: 6, gridColumn: 2}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <p>Conexión a DB soportadas</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 6, gridColumn: 3}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <p>Conexión a DB</p>
            <CaralIcon name='plus' size={20} color='#0191FF' />
            <b>integraciones</b>
        </div>

        <div className={style.rowcont} style={{gridRow: 7, gridColumn: 1}}>
            <p>Embedding en sitios web</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 7, gridColumn: 2}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <p>Incluido</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 7, gridColumn: 3}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <p>Incluido</p>
        </div>


        <div className={style.rowcont} style={{gridRow: 8, gridColumn: 1}}>
            <p>Nube</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 8, gridColumn: 2}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <CaralIcon name="cloud" size={20} color='#0191FF' />
            <p>Entorno privado</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 8, gridColumn: 3}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <CaralIcon name="cloud" size={20} color='#0191FF' />
            <p>Entorno privado</p>
        </div>

        <div className={style.rowcont} style={{gridRow: 9, gridColumn: 1}}>
            <p>Soporte</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 9, gridColumn: 2}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <CaralIcon name='wrench' size={20}/>
            <p>Soporte básico</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 9, gridColumn: 3}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <CaralIcon name='wrench' size={20}/>
            <p>Prioritario</p>
        </div>

        <div className={style.rowcont} style={{gridRow: 10, gridColumn: 1}}>
            <p>Integraciones</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 10, gridColumn: 2}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <p>Personalizadas</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 10, gridColumn: 3}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <p>Acceso extendido con endpoints personalizados</p>
        </div>

        <div className={style.rowcont} style={{gridRow: 11, gridColumn: 1}}>
            <p>Conexión con Teams</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 11, gridColumn: 2}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <CaralIcon name="Teams" size={20} color='##595DB2' />
            <p>Incluido</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 11, gridColumn: 3}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <CaralIcon name="Teams" size={20} color='##595DB2' />
            <p>Incluido</p>
        </div>


        <div className={style.rowcont} style={{gridRow: 12, gridColumn: 1}}>
            <p>Conexión con WhatsApp</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 12, gridColumn: 2}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <CaralIcon name="Whatsapp" size={20} color='#00A884' />
            <p>Incluido</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 12, gridColumn: 3}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <CaralIcon name="Whatsapp" size={20} color='#00A884' />
            <p>Incluido</p>
        </div>

        <div className={style.rowcont} style={{gridRow: 13, gridColumn: 1}}>
            <p>LLMs soportados</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 13, gridColumn: 2}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <CaralIcon name='OpenAI'size={20} color='#000000' />
            <p>GPT</p>
            <CaralIcon name="Gemini" size={20} color='#0191FF' />
            <p>Gemini</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 13, gridColumn: 3}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <p>Múltiples modelos (+2000 LLMs)</p>
        </div>


        <div className={style.rowcont} style={{gridRow: 14, gridColumn: 1}}>
            <p>API KEY</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 14, gridColumn: 2}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <p>SEIDOR</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 14, gridColumn: 3}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <p>SEIDOR  y/o PROPIAS</p>
        </div>

        <div className={style.rowcont} style={{gridRow: 15, gridColumn: 1}}>
            <p>Creación de flujos personalizados</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 15, gridColumn: 2}}>
            <CaralIcon name='x' size={20} color='#EF4444' />
            <p>No incluido</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 15, gridColumn: 3}}>
            <CaralIcon name='check' size={20} color='#44CA9F' />
            <p>Daiana Studio</p>
        </div>


        <div className={style.rowcont} style={{gridRow: 16, gridColumn: 1}}>
            <p>Despliegue</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 16, gridColumn: 2}}>
            <p>Servidor propio o Nube</p>
        </div>
        <div className={style.rowcont} style={{gridRow: 16, gridColumn: 3}}>
            <p>Servidor propio o Nube</p>
        </div>
    </div>

    <p> </p>
    </Layout>
  );
}


function Price({ size, color }: { size: string, color: string }) {
    return (
        <div className={style.price}>
            {size === 'small' ? (
                <div className={style.bugt} style={{backgroundColor: color}}>Small</div>
            ) : size === "medium" ? (
                <div className={style.bugt} style={{backgroundColor: color}}>Medium</div>
            ) : (
                <div className={style.bugt} style={{backgroundColor: color}}>large</div>
            )
            }

            <hr />

            <div className={style.priceDetails}>
                <h4>Incluye</h4>
                {size === 'small' ? (
                    <h2>10.000</h2>
                ): size === "medium" ? (
                    <h2>20.000</h2> 
                ): (
                    <h2>40.000</h2>
                )                
                }
                <h4>Mensajes por mes</h4>
            </div>
        </div>
    )
}