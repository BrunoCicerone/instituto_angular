import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario-details',
  templateUrl: './usuario-details.component.html',
  styleUrls: ['./usuario-details.component.css']
})
export class UsuarioDetailsComponent implements OnInit {
  usuarioId!: number;
  asignaturas: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.usuarioId = +this.route.snapshot.paramMap.get('id')!;
    this.getAsignaturas();
  }

  getAsignaturas(): void {
    const url = 'http://localhost/datos.php';

    this.http.get<any>(url).subscribe(
      (data) => {
        this.asignaturas = data.asignaturas;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

