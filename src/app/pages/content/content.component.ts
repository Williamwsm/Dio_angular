import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  @Input()
  photoCover:string ="https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2020/10/PrimeDay_AmazonPrimeDay_Ofertas.jpg"
  @Input()
  contentTitle:string="amazon exige o fim do home office"
  @Input()
  contentDescription:string ="com a  desculpa de melhoria de produtividade amazon passa a retomar com o trabalho presencial"
  constructor(){}
  ngOnInit(): void {
  }


}
