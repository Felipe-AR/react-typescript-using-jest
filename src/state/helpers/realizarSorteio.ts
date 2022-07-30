import shuffle from "just-shuffle"

export const realizarSorteio = (participantes: string[]) => {
  const totalDeParticipantes = participantes.length
  const participantesEmbaralhados = shuffle(participantes)
  const resultado = new Map<string, string>()
  
  for (let indiceDoParticipante = 0; indiceDoParticipante < totalDeParticipantes; indiceDoParticipante++) {
    const indiceDoProximoParticipante = indiceDoParticipante === (totalDeParticipantes - 1) ? 0 : indiceDoParticipante + 1
    resultado.set(participantesEmbaralhados[indiceDoParticipante], participantesEmbaralhados[indiceDoProximoParticipante])
  }

  return resultado;
}

export default realizarSorteio;