import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import PageLayout from "./PageLayout";

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('a pagina de configuracao', () => {
    test('deve ser renderizada corretamente', () => {
        const { container } = render(<RecoilRoot>
            <PageLayout />
        </RecoilRoot>)

        expect(container).toMatchSnapshot()
    })
})