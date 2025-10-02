import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data-service';
import { Thing } from '../models/thing.model';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view.html',
  styleUrls: ['./view.css']
})
export class View implements OnInit {
  thing: Thing | null = null;
  ownerDisplayName: string = 'Carregando...';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    // 1. Obtém o ID da rota.
    const thingId = this.route.snapshot.paramMap.get('id');
    if (!thingId) {
      this.router.navigate(['/home']);
      return;
    }

    // 2. Busca o item pelo ID.
    this.dataService.getThingById(thingId).subscribe(thing => {
      this.thing = thing;

      // 3. Verifica se o item existe e se o status é 'ON'.
      if (!this.thing || this.thing.status !== 'ON') {
        this.router.navigate(['/home']);
        return;
      }

      // 4. Se o item estiver visível, busca o displayName do dono.
      // Assumimos que a sua aplicação tem um serviço ou método para obter o displayName de um usuário
      // a partir de seu 'owner' (UID). Por enquanto, usamos um placeholder.
      this.ownerDisplayName = this.thing.owner; // Substitua por um método real de busca de display name.
    });
  }
}
