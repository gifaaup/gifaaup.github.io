# Redes Neuronales Informadas por la Física (PINNs): De Navier-Stokes al Cómputo Moderno

**Fecha:** 28 de octubre de 2026  
**Autor:** Equipo de Física Computacional  
**Categoría:** Investigación Científica  

---

Las **Physics-Informed Neural Networks (PINNs)**, popularizadas a partir del trabajo seminal de Raissi, Perdikaris y Karniadakis (2019), representan un cambio de paradigma en la resolución numérica de ecuaciones diferenciales ordinarias y parciales (EDPs).

A diferencia de los métodos numéricos tradicionales (elementos finitos, volúmenes finitos o diferencias finitas), una PINN no requiere forzosamente la discretización espacial en mallas complejas (mesh-free). En su lugar, parametriza la solución desconocida mediante una red neuronal profunda y utiliza la **diferenciación automática (Autograd)** para evaluar los operadores diferenciales.

## La formulación de la función de pérdida

Dada una EDP general parametrizada como:

$$ \mathcal{N}[u](x, t) = f(x, t), \quad x \in \Omega, \quad t \in [0, T] $$

La función de pérdida total $\mathcal{L}_{total}$ se define como una combinación lineal ponderada:

$$ \mathcal{L}_{total} = w_{data}\mathcal{L}_{data} + w_{physics}\mathcal{L}_{physics} + w_{bc}\mathcal{L}_{bc} + w_{ic}\mathcal{L}_{ic} $$

Donde:
- $\mathcal{L}_{data}$: Error cuadrático medio respecto a mediciones experimentales o sensores in-situ.
- $\mathcal{L}_{physics}$: Residuo de la ecuación diferencial evaluado en puntos de colocación (*collocation points*).
- $\mathcal{L}_{bc}$ y $\mathcal{L}_{ic}$: Cumplimiento de condiciones de frontera e iniciales.

## Aplicación directa a la Cuenca del Canal de Panamá

En Panamá, la dinámica del flujo hídrico en embalses como Gatún y Alhajuela depende críticamente de variables meteorológicas variables y topografía irregular. Las simulaciones CFD tradicionales demandan días de supercómputo por cada escenario climático.

Con PINNs y operadores neuronales (como *Fourier Neural Operators* o FNO):
1. Es posible entrenar un modelo sustituto (*surrogate model*) que evalúa nuevos escenarios en milisegundos.
2. Se respeta estrictamente la ley de conservación de masa $\nabla \cdot \mathbf{u} = 0$.
3. Se integran datos reales de pluviometría con ecuaciones hidrodinámicas de aguas someras (Saint-Venant).

GIFAA está desarrollando actualmente bancos de prueba abiertos en PyTorch y DeepXDE para validar estas arquitecturas en escenarios locales.
