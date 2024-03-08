import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
public arrayProjects = signal<IProjects[]>([
  {
    src: 'assets/img/projects/vfull.png',
    alt: "Projeto vida FullStack",
    title: "Vida FullStack",
    with: '100px',
    height: '51px',
    description: '<p> Explore mundo do desenvolvimento web.</p>',
    links: [
      {
        name: 'Conheça o Blog',
        href: 'Https://endereço'
      }
    ]
  },
])
}
