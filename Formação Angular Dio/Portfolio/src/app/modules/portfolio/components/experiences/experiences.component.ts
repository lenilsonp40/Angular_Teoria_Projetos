import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Front-end Especialista',
        p: 'ZUP | Set 2020 - Present',
      },
      text: '<p>Desde setembro de 2020, atuo como Analista de Sistema Especialista na ZUP, destacando-me nas áreas Front-end, utilizando Html5, Css3, Javascript, TypeScript, Angular 2+, Angular Material e NgRx, e Back-end, onde o NodeJs é aplicado em Provas de Conceito, caso necessário.</p> <p>Além disso, minha experiência abrange a integração com Micro Serviços, Docker, GitLab, Jira e Scrum. Atualmente, enfrento o desafio significativo de contribuir para o desenvolvimento do Open Finance para o Banco Itaú, alcançando sucesso ao implementar a ferramenta em conformidade com os marcos regulatórios.</p> <p>Destaco também a criação de componentes altamente reutilizáveis e personalizáveis no front-end, utilizando Angular, como parte do nosso compromisso com a eficiência e a qualidade do código.</p>',
    },
    {
      summary: {
        strong: 'Fullstack Developer',
        p: 'Everis | Out 2019 - set 2020',
      },
      text: '<p>Durante meu período na Everis de outubro de 2019 a setembro de 2020, atuei como Analista de Sistema, liderando e desenvolvendo equipes.</p> <p>Minhas responsabilidades no front-end incluíram o uso de Html5, Css3, Javascript, TypeScript, Angular, Angular Material e NgRx, enquanto no back-end, trabalhei com NodeJs (Express/NestJs), Sequelize/TypeOrm, MongoDb, MariaDb e Redis.</p> <p>Além disso, liderei integrações com Micro Serviços, Jenkins, Gcloud, Kubernetes e Docker, utilizando ferramentas como GitLab, Jira e Scrum.</p> <p>Durante esse período, enfrentei e superei desafios significativos, destacando-se o desenvolvimento de um ChatBot.</p> <p>Como resultado, fui promovido a Líder da Squad Fullstack Angular/NodeJs, conduzi melhorias contínuas em um sistema legado e aprimorei minhas habilidades nos processos do GitFlow.</p>',
    },
    {
      summary: {
        strong: 'Consultor Web',
        p: 'Consultor Web | Set 2018 - Set 2019',
      },
      text: '<p>Em minha jornada como consultor web, tive a oportunidade de ser a ponte para várias empresas embarcarem no universo online.</p> <p>Por meio de projetos cuidadosamente elaborados, explorei o vasto espectro do desenvolvimento front-end, utilizando Html5, Css3, Javascript, TypeScript, Angular e Angular Material.</p> <p>Nos bastidores, no back-end, construí robustas infraestruturas com NodeJs (Express/NestJs), Sequelize/TypeOrm e integrações eficientes com bancos de dados MySql/Postgress.</p>',
    },
  ])

}
