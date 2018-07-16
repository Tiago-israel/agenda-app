import { ContatoService } from './../../services/contato.service';
import { Component, OnInit } from "@angular/core";
import { Contato } from '../../../models/contato.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TelefoneService } from '../../services/telefone.service';

@Component({
    selector: 'detalhes-component',
    templateUrl: './detalhes-contato.component.html',
    styleUrls: ['./detalhes-contato.component.css']

})
export class DetalhesContatoComponent implements OnInit {

    private id: string;
    public contato: Contato = new Contato();
    public array:any[] = null;

    constructor(
        private contatoService: ContatoService,
        private telefoneService: TelefoneService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: any) => {
                this.id = params['id'];
                if (this.id) {
                    this.buscarContatoPorId(this.id);
                }
            }
        )
    }

    public excluirTelefone(id: string): void {
        this.telefoneService.delete(id).subscribe(
            () => {
                this.buscarContatoPorId(this.id);
            }
        )
    }

    private buscarContatoPorId(id: string): void {
        this.contatoService.get(id).subscribe(data => {
            if (data)
                this.contato = data;
        });
    }

}