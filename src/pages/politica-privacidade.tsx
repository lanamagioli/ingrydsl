import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/sections/Footer"; 

function PoliticaPrivacidade() {

    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">

            <main className="flex-grow container mx-auto px-6 py-12 max-w-4xl animate-fade-in">

                {/* Botão de Voltar */}
                <div className="mb-8">
                    <Link
                        to="/"
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2"
                    >
                        ← Voltar para o início
                    </Link>
                </div>

                {/* Cabeçalho */}
                <div className="border-b border-border pb-8 mb-8">
                    <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
                        Política de Privacidade
                    </h1>
                    <p className="text-muted-foreground">
                        Última atualização: 17 de Dezembro de 2025
                    </p>
                </div>

                {/* Conteúdo do Texto */}
                <div className="space-y-8 text-foreground/90 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-serif text-primary mb-4">1. Introdução</h2>
                        <p className="mb-4">
                            Esta Política de Privacidade tem como objetivo demonstrar o compromisso da <strong>Dra. Ingryd Carolyne de Paula</strong>, inscrita sob o CPF 473.683.628-80, com a proteção dos dados pessoais coletados de seus pacientes e visitantes do site, nos termos da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
                        </p>
                        <p>
                            Ao utilizar o site <a href="http://www.ingrydcarolnutri.com.br" className="text-accent hover:text-primary transition-smooth font-medium underline underline-offset-4">www.ingrydcarolnutri.com.br</a>, você manifesta ciência e concordância com as condições descritas nesta política.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-primary mb-4">2. Dados pessoais coletados</h2>
                        <p className="mb-3">Podemos coletar as seguintes informações pessoais:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-accent">
                            <li>Nome completo;</li>
                            <li>Endereço de e-mail;</li>
                            <li>Número de telefone;</li>
                            <li>Outras informações fornecidas voluntariamente para agendamento.</li>
                        </ul>
                        <p className="mt-4 text-sm text-muted-foreground bg-card p-4 rounded-[var(--radius)] border border-border">
                            O site poderá coletar dados de navegação de forma automática (cookies, endereço IP, geolocalização aproximada), sempre observando as normas de segurança.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-primary mb-4">3. Finalidade do tratamento</h2>
                        <p>Seus dados pessoais são tratados para:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-accent mt-3">
                            <li>Agendamento e confirmação de consultas;</li>
                            <li>Envio de conteúdos informativos e newsletters;</li>
                            <li>Melhoria dos serviços e análise de estatísticas.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-primary mb-4">4. Compartilhamento e Segurança</h2>
                        <p className="mb-4">
                            Seus dados <strong>não são compartilhados</strong> com terceiros, salvo obrigação legal.
                        </p>
                        <p>
                            Adotamos medidas técnicas (como senhas fortes e ambientes protegidos) para proteger seus dados contra acessos não autorizados. Os dados são mantidos pelo tempo necessário para cumprimento legal e histórico clínico.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-primary mb-4">5. Seus Direitos</h2>
                        <p className="mb-4">
                            Você tem direito de solicitar acesso, correção, exclusão ou revogação de consentimento a qualquer momento.
                        </p>
                        <div className="bg-secondary/50 p-6 rounded-[var(--radius)] border border-border">
                            <p className="font-serif text-lg mb-2 text-primary">Fale com a Encarregada de Dados</p>
                            <p className="mb-2">Para exercer seus direitos, entre em contato:</p>
                            <p className="font-medium text-foreground">
                                📧 <a href="mailto:ingrydcarolpaula@gmail.com" className="hover:text-accent transition-smooth">ingrydcarolpaula@gmail.com</a>
                            </p>
                        </div>
                    </section>

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default PoliticaPrivacidade;