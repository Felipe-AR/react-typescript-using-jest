import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../../state/hook/useAdicionarParticipante"
import { useMensagemDeErro } from "../../state/hook/useMensagemDeErro"
import { InputGroupButton, Input, Button, WarningMessage } from './styles'

const Formulario = () => {

    const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAdicionarParticipante()

    const mensagemDeErro = useMensagemDeErro()

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }

    return (<form onSubmit={adicionarParticipante}>
        <InputGroupButton>
            <Input
                ref={inputRef}
                value={nome}
                onChange={evento => setNome(evento.target.value)}
                type="text"
                placeholder="Insira os nomes dos participantes"
            />
            <Button disabled={!nome}>Adicionar</Button>
        </InputGroupButton>
        {mensagemDeErro && <WarningMessage role="alert">{mensagemDeErro}</WarningMessage>}
    </form>)
}

export default Formulario