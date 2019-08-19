import { Component, OnInit } from '@angular/core';
import { EspisodesService } from './espisodes.service';
import { Episode } from '../api/episodes';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  public episodes: Episode[];

  constructor(private episodeService: EspisodesService) { }

  ngOnInit() {
    this.episodeService.getEpisodes()
          .subscribe( episodes => {
            if(episodes){
              this.episodes = episodes;
            }
          })
  }

}
