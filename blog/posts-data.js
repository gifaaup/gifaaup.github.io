/**
 * GIFAA — Datos y contenido de los artículos de GIFAA pre-empaquetados.
 * Permite el funcionamiento tanto en protocolos http/https como en local (file://) sin bloqueos CORS.
 */
window.GIFAA_BLOG_DATA = {
  "posts": [
    {
      "id": "post-001",
      "slug": "lanzamiento-gifaa",
      "title": "Lanzamiento oficial de GIFAA en la Universidad de Panamá",
      "date": "2026-11-04",
      "author": "Dirección Colegiada GIFAA",
      "category": "Institucional",
      "summary": "Nace el primer grupo de investigación de la Universidad de Panamá especializado en la convergencia de la física teórica y experimental con el aprendizaje automático moderno.",
      "file": "posts/lanzamiento-gifaa.md",
      "readingTime": "4 min",
      "content": "# Lanzamiento oficial de GIFAA en la Universidad de Panamá\n\n**Fecha:** 4 de noviembre de 2026  \n**Autor:** Dirección Colegiada GIFAA  \n**Categoría:** Comunicado Institucional  \n\n---\n\nLa **Universidad de Panamá**, a través de la Facultad de Ciencias Naturales, Exactas y Tecnología y su Departamento de Física, anuncia con entusiasmo la constitución y formalización del **Grupo de Investigación en Física y Aprendizaje Automático (GIFAA)**.\n\nGIFAA nace como un espacio académico de frontera dedicado a integrar el rigor matemático de las leyes físicas fundamentales con los métodos contemporáneos del *Machine Learning*, la computación tensorial y el modelado probabilístico.\n\n## ¿Por qué nace GIFAA?\n\nHistóricamente, los avances en modelado computacional y la inteligencia artificial han transcurrido por senderos paralelos en nuestra región:\n\n1. **La física clásica y computacional**, con un enfoque determinista o estocástico guiado por ecuaciones diferenciales parciales (EDPs) y primeros principios.\n2. **El aprendizaje automático de caja negra**, con asombrosa capacidad de reconocer patrones pero vulnerable a predicciones no físicas, alucinaciones numéricas y violaciones de leyes de conservación elementales.\n\nGIFAA se sitúa en la intersección: lo que en la literatura global se conoce como **Scientific Machine Learning (SciML)**. Nuestro propósito es dotar a la ciencia panameña de herramientas predictivas confiables, físicamente consistentes y de alto rendimiento.\n\n## Ejes de Acción Inmediata\n\n- **Nivelación y Semillero:** Formación abierta de estudiantes de pregrado y postgrado en Python científico, PyTorch, cálculo tensorial y simulación numérica.\n- **Vínculo con Desafíos Nacionales:** Proyectos aplicados en gestión de cuencas hidrográficas (clave para el Canal de Panamá), dinámica de fluidos y materiales avanzados.\n- **Alineación con la Estrategia Nacional de IA 2036:** Fomentar una cultura de investigación ética, explicable (*Trustworthy AI*) y abierta.\n\nInvitamos a la comunidad universitaria, investigadores, docentes y estudiantes a unirse a este esfuerzo colaborativo para consolidar el liderazgo científico de Panamá en la región.\n"
    },
    {
      "id": "post-002",
      "slug": "introduccion-pinns",
      "title": "Redes Neuronales Informadas por la Física (PINNs): De Navier-Stokes al Cómputo Moderno",
      "date": "2026-10-28",
      "author": "Equipo de Física Computacional",
      "category": "Investigación",
      "summary": "Una exploración pedagógica de cómo la diferenciación automática en PyTorch y JAX permite incrustar principios físicos y leyes de conservación en arquitecturas neuronales profundas.",
      "file": "posts/introduccion-pinns.md",
      "readingTime": "7 min",
      "content": "# Redes Neuronales Informadas por la Física (PINNs): De Navier-Stokes al Cómputo Moderno\n\n**Fecha:** 28 de octubre de 2026  \n**Autor:** Equipo de Física Computacional  \n**Categoría:** Investigación Científica  \n\n---\n\nLas **Physics-Informed Neural Networks (PINNs)**, popularizadas a partir del trabajo seminal de Raissi, Perdikaris y Karniadakis (2019), representan un cambio de paradigma en la resolución numérica de ecuaciones diferenciales ordinarias y parciales (EDPs).\n\nA diferencia de los métodos numéricos tradicionales (elementos finitos, volúmenes finitos o diferencias finitas), una PINN no requiere forzosamente la discretización espacial en mallas complejas (mesh-free). En su lugar, parametriza la solución desconocida mediante una red neuronal profunda y utiliza la **diferenciación automática (Autograd)** para evaluar los operadores diferenciales.\n\n## La formulación de la función de pérdida\n\nDada una EDP general parametrizada como:\n\n$$ \\mathcal{N}[u](x, t) = f(x, t), \\quad x \\in \\Omega, \\quad t \\in [0, T] $$\n\nLa función de pérdida total $\\mathcal{L}_{total}$ se define como una combinación lineal ponderada:\n\n$$ \\mathcal{L}_{total} = w_{data}\\mathcal{L}_{data} + w_{physics}\\mathcal{L}_{physics} + w_{bc}\\mathcal{L}_{bc} + w_{ic}\\mathcal{L}_{ic} $$\n\nDonde:\n- $\\mathcal{L}_{data}$: Error cuadrático medio respecto a mediciones experimentales o sensores in-situ.\n- $\\mathcal{L}_{physics}$: Residuo de la ecuación diferencial evaluado en puntos de colocación (*collocation points*).\n- $\\mathcal{L}_{bc}$ y $\\mathcal{L}_{ic}$: Cumplimiento de condiciones de frontera e iniciales.\n\n## Aplicación directa a la Cuenca del Canal de Panamá\n\nEn Panamá, la dinámica del flujo hídrico en embalses como Gatún y Alhajuela depende críticamente de variables meteorológicas variables y topografía irregular. Las simulaciones CFD tradicionales demandan días de supercómputo por cada escenario climático.\n\nCon PINNs y operadores neuronales (como *Fourier Neural Operators* o FNO):\n1. Es posible entrenar un modelo sustituto (*surrogate model*) que evalúa nuevos escenarios en milisegundos.\n2. Se respeta estrictamente la ley de conservación de masa $\\nabla \\cdot \\mathbf{u} = 0$.\n3. Se integran datos reales de pluviometría con ecuaciones hidrodinámicas de aguas someras (Saint-Venant).\n\nGIFAA está desarrollando actualmente bancos de prueba abiertos en PyTorch y DeepXDE para validar estas arquitecturas en escenarios locales.\n"
    },
    {
      "id": "post-003",
      "slug": "estrategia-ia-2036",
      "title": "Panamá ante la Estrategia IA 2036: Física, Modelos de Operadores y Soberanía Científica",
      "date": "2026-10-15",
      "author": "Comité Científico",
      "category": "Políticas Públicas",
      "summary": "Reflexiones sobre el rol que juega el modelado riguroso y la IA explicable frente a los desafíos críticos de Panamá: gestión hídrica del Canal, transición energética y formación de talento.",
      "file": "posts/estrategia-ia-2036.md",
      "readingTime": "5 min",
      "content": "# Panamá ante la Estrategia IA 2036: Física, Modelos de Operadores y Soberanía Científica\n\n**Fecha:** 15 de octubre de 2026  \n**Autor:** Comité Científico GIFAA  \n**Categoría:** Políticas Públicas y Prospectiva  \n\n---\n\nLa formulación de la **Estrategia Nacional de Inteligencia Artificial (IA 2036)** de la República de Panamá marca un hito en la planificación tecnológica del país. Sin embargo, para que esta estrategia trascienda el mero consumo de tecnologías importadas y se convierta en una palanca de soberanía y desarrollo sostenible, es indispensable cimentar capacidades locales en las ciencias duras.\n\n## El imperativo de la IA Confiable (*Trustworthy AI*)\n\nGran parte del debate público en torno a la IA se enfoca en modelos lingüísticos generativos (LLMs). Sin embargo, en infraestructuras críticas nacionales —como la operación del Canal de Panamá, la red eléctrica nacional y la predicción epidemiológica— no podemos darnos el lujo de \"alucinaciones\" probabilísticas.\n\nLa física impone restricciones infranqueables:\n- Conservación de energía.\n- Conservación de momento lineal y angular.\n- Termodinámica de procesos irreversibles.\n\nIncorporar estas leyes directamente en las arquitecturas algorítmicas (mediante redes equivariantes de simetría $E(3)$, operadores neuronales y PINNs) es el camino más riguroso para construir **IA Confiable, Auditable y Segura**.\n\n## Tres prioridades estratégicas desde la Universidad de Panamá\n\n1. **Formación de Capital Humano de Alto Nivel:** Dotar a los estudiantes de física, matemáticas e ingenierías con competencias avanzadas en optimización, computación científica y aprendizaje profundo.\n2. **Infraestructura y Datos Abiertos:** Impulsar repositorios abiertos de datos ambientales y oceanográficos de Panamá para entrenamiento de modelos locales.\n3. **Colaboración Multidisciplinar:** Acercar a los departamentos de ciencias básicas con los tomadores de decisiones en el sector logístico, energético y ambiental.\n\nGIFAA reafirma su compromiso de ser un puente activo entre la academia pública y el futuro tecnológico de nuestra nación.\n"
    }
  ]
};
