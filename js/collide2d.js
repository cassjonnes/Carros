//testar se esta em qual canto do retangulo
function checkCollisionCircleRectangle(rectX, rectY, rectWidth, rectHeight, circleX, circleY, circleDiameter) {
  // Calcular o ponto central do retângulo
  const rectCenterX = rectX + rectWidth / 2;
  const rectCenterY = rectY + rectHeight / 2;

  // Calcular o ponto mais próximo do retângulo ao círculo
  const closestX = Math.max(rectX, Math.min(circleX, rectX + rectWidth));
  const closestY = Math.max(rectY, Math.min(circleY, rectY + rectHeight));

  // Calcular a distância entre o ponto mais próximo do retângulo e o centro do círculo
  const distanceX = circleX - closestX;
  const distanceY = circleY - closestY;
  const distanceSquared = distanceX * distanceX + distanceY * distanceY;

  // Verificar se houve colisão comparando a distância com o raio do círculo
  const radiusSquared = circleDiameter / 2 * circleDiameter / 2;

  return distanceSquared < radiusSquared;
}

/*if (checkCollisionCircleRectangle(circleX, circleY, circleDiameter, rectX, rectY, rectWidth, rectHeight)) {
  console.log('Houve colisão!');
} else {
  console.log('Não houve colisão.');
}*/