import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  getCursos() {
    const cursos = [];
    const nomesCursos = [
      'Angular', 'Java', 'PHP', 'Ruby', 'Python', 'JavaScript', 'TypeScript', 'C#', 'C++', 'Go', 'Rust', 'Swift',
      'Kotlin', 'Scala', 'HTML', 'CSS', 'SQL', 'NoSQL', 'React', 'Vue', 'Django', 'Flask', 'Spring', 'Laravel',
      'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'AWS', 'Azure', 'Google Cloud',
      'Docker', 'Kubernetes', 'DevOps', 'Machine Learning', 'Data Science', 'Big Data', 'Data Analysis',
      'Artificial Intelligence', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Blockchain', 'Cybersecurity', 'Networking',
      'Ethical Hacking', 'Linux', 'Windows Server', 'Unix', 'iOS Development', 'Android Development', 'Game Development',
      'Unity', 'Unreal Engine', '3D Modeling', 'Graphic Design', 'UI/UX Design', 'Digital Marketing', 'SEO', 'Content Writing',
      'Copywriting', 'Project Management', 'Agile', 'Scrum', 'Kanban', 'ITIL', 'Cloud Computing', 'Salesforce', 'SAP',
      'Oracle', 'Jenkins', 'Git', 'GitHub', 'Bitbucket', 'Terraform', 'Ansible', 'Puppet', 'Chef', 'Ruby on Rails', 'Perl',
      'MATLAB', 'R Programming', 'SAS', 'Stata', 'Tableau', 'Power BI', 'Business Intelligence', 'ERP Systems',
      'CRM Systems', 'Quantitative Analysis', 'Financial Modeling', 'Accounting', 'Statistics', 'Calculus', 'Physics',
      'Chemistry', 'Biology', 'Microservices', 'API Development', 'IoT', 'Robotics'
    ];

    for (let i = 0; i < 100; i++) {
      cursos.push({ id: i + 1, nome: nomesCursos[i % nomesCursos.length] });
    }

    return cursos;
  }


  findCursoById(id: number) {
    return this.getCursos().find(curso => curso.id == id);
  }
}
