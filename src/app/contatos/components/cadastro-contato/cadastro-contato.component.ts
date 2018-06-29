import { LoadingIndicatorService } from './../../../utils/loading-indicator/loading-indicator.service';
import { Telefone } from '../../../models/telefone.model';
import { ContatoService } from './../../services/contato.service';
import { TelefoneService } from './../../services/telefone.service';
import { Component, OnInit } from "@angular/core";
import { Contato } from "../../../models/contato.model";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'cadastro-contato',
    templateUrl: './cadastro-contato.component.html',
    styleUrls: ['./cadastro-contato.component.css']
})
export class CadastroContatoComponent implements OnInit {

    public contato: Contato = new Contato();
    public telefone: Telefone = new Telefone();
    public maskTel = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    public maskCel = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    public mask: any = this.maskTel;
    private idContato: string;

    constructor(
        private contatoService: ContatoService,
        private telefoneService: TelefoneService,
        private route: ActivatedRoute,
        private router: Router,
        private loading: LoadingIndicatorService
    ) { }


    ngOnInit(): void {
        this.route.params.subscribe(
            (params: any) => {
                this.idContato = params['id'];
                if (this.idContato) {
                    this.buscarContatoPorId(this.idContato);
                }
            }
        )
    }

    public novoTelefone(): void {
        this.telefone = new Telefone();
    }

    public adicionarNumero(): void {
        this.contato.telefones.push(this.telefone);
        this.salvarContato();
    }

    public excluirTelefone(indice: number, telefone: Telefone): void {
        this.loading.show();
        if (telefone.id) {
            this.telefoneService.delete(telefone.id).subscribe(
                () => {
                    this.contato.telefones.splice(indice, 1);
                    this.loading.hide();
                }
            )
        } else {
            this.contato.telefones.splice(indice, 1);
            this.loading.hide();
        }
    }

    public salvarContato(): void {
        this.loading.show();
        if (!this.contato.id) {
            this.novoContato();
        } else {
            this.atualizarContato();
        }
    }

    public buscarContatoPorId(id: string): void {
        this.loading.show();
        this.contatoService.get(id).subscribe(data => {
            if (data)
                this.contato = data;
            this.loading.hide();
        });
    }

    private novoContato(): void {
        this.contatoService.post(this.contato).subscribe(
            (data) => {
                this.contato = data;
                this.loading.hide();
                this.router.navigate([`contatos/editar-contato/${this.contato.id}`]);
            }
        );
    }

    private atualizarContato(): void {
        this.contatoService.put(this.contato.id, this.contato).subscribe(
            (data) => {
                this.contato = data;
                this.loading.hide();
                this.router.navigate([`contatos/editar-contato/${this.contato.id}`]);
            }
        );
    }

    public trocarMascara(check): void {
        if (check.checked == true) {
            this.mask = this.maskCel;
        } else {
            this.mask = this.maskTel;
        }
    }

}