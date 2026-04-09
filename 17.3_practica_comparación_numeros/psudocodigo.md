# Pseudocódigo - Comparador de Números

## Descripción
Programa que solicita 3 números al usuario, los muestra en pantalla
y los ordena de mayor a menor y de menor a mayor.

---

## Variables
```
num1     → número decimal
num2     → número decimal
num3     → número decimal
numeros  → lista de 3 números
```

---

## Pseudocódigo

```
INICIO

  // 1. Capturar datos
  MOSTRAR ventana emergente "Ingrese el primer número"
  LEER num1 → convertir a número decimal

  MOSTRAR ventana emergente "Ingrese el segundo número"
  LEER num2 → convertir a número decimal

  MOSTRAR ventana emergente "Ingrese el tercer número"
  LEER num3 → convertir a número decimal

  // 2. Mostrar en pantalla
  MOSTRAR num1 en cajita 1
  MOSTRAR num2 en cajita 2
  MOSTRAR num3 en cajita 3

  // 3. Al hacer clic en boton "Comparar"
  ejecuta la función "Comparar" 

    CREAR lista numeros = [num1, num2, num3]

    ORDENAR lista de menor a mayor

    numeroMenor  ← numeros[0]   // primer elemento
    numeroCentro ← numeros[1]   // elemento del medio
    numeroMayor  ← numeros[2]   // último elemento

    // 4. Mostrar resultados
    MOSTRAR en pantalla:
      "De mayor a menor: numeroMayor, numeroCentro, numeroMenor"
      "De menor a mayor: numeroMenor, numeroCentro, numeroMayor"

FIN
```

---

## Diagrama de flujo (texto)

```
[INICIO]
    ↓
[Prompt: num1, num2, num3]
    ↓
[Llenar cajitas con los valores]
    ↓
[Usuario hace clic en "Comparar"]
    ↓
[Ordenar números en un array]
    ↓
[Asignar menor, centro, mayor]
    ↓
[Mostrar resultado en la página]
    ↓
[FIN]
```

---

## Ejemplo de ejecución

| Entrada | Valor |
|---------|-------|
| num1    | 4     |
| num2    | 4     |
| num3    | 2     |

| Resultado       | Salida      |
|-----------------|-------------|
| De mayor a menor | 4 , 4 , 2  |
| De menor a mayor | 2 , 4 , 4  |