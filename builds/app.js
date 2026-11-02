const M='https://metabattle.com/wiki/Build:', S='https://snowcrows.com/builds/wvw/', G='https://gw2mists.com/en/builds';
// Role assignments follow Snow Crows' published WvW squad role tables. Other sources are matching examples, not identical builds.
const data=[];
function add(role,spec,profession,meta,snow,mists){data.push([role,spec,profession,meta&&[meta,'https://metabattle.com/wiki/index.php?title='+encodeURIComponent('Build:'+spec+' - '+meta)],snow&&[snow[0],S+snow[1]],mists&&[mists,G]])}
const P='1st Support', H='2nd Support (Healer)', T='3rd Support', D='Strip DPS', X='Power DPS';
add(P,'Firebrand','Guardian','Support Firebrand',['Support Firebrand','guardian/support-firebrand'],'Support Firebrand');
add(P,'Luminary','Guardian','Support Luminary',['Support Luminary','guardian/support-luminary'],'Support Luminary');
add(P,'Chronomancer','Mesmer','Inspi/Chaos Chrono',['Support Chronomancer','mesmer/support-chronomancer'],'Support Chronomancer');
add(P,'Dragonhunter','Guardian','Chinese Support DH',['Support Dragonhunter','guardian/support-dragonhunter'],null);
add(P,'Troubadour','Mesmer','Inspi/Chaos Troub',['Support Troubadour','mesmer/support-troubadour'],'Support Troubadour');
add(H,'Druid','Ranger','Support Druid',['Support Druid','ranger/support-druid'],'Heal Druid');
add(H,'Specter','Thief','Support Specter',['Support Specter','thief/support-spectre'],'Support Specter');
add(H,'Vindicator','Revenant','Ventari Vindicator',['Support Vindicator','revenant/support-vindicator'],'Support Vindicator');
add(H,'Evoker','Elementalist','Specialized Water',['Support Evoker','elementalist/support-evoker'],'Support Evoker');
add(H,'Tempest','Elementalist','Staff Support',['Support Tempest','elementalist/support-tempest-staff'],'Cleanse Tempest');
add(H,'Scrapper','Engineer','Med Kit Scrapper',['Support Scrapper','engineer/support-scrapper'],'Heal Scrapper');
add(H,'Troubadour','Mesmer','Inspi/Chaos Troub',['Support Troubadour','mesmer/support-troubadour'],'Support Troubadour');
add(T,'Troubadour','Mesmer','Inspi/Chaos Troub',['Support Troubadour','mesmer/support-troubadour'],'Support Troubadour');
add(T,'Paragon','Warrior','Support Paragon',['Support Paragon','warrior/support-paragon'],'Support Paragon');
add(T,'Chronomancer','Mesmer','Inspi/Chaos Chrono',['Support Chronomancer','mesmer/support-chronomancer'],'Support Chronomancer');
add(T,'Catalyst','Elementalist','Support Catalyst',['Support Catalyst','elementalist/support-catalyst-staff'],'Support Catalyst');
add(T,'Renegade','Revenant',null,['Boon Renegade','revenant/boon-renegade'],null);
add(T,'Spellbreaker','Warrior','Support Spellbreaker',['Support Spellbreaker','warrior/support-spellbreaker'],null);
add(T,'Conduit','Revenant',null,['Support Conduit','revenant/support-conduit'],null);
add(T,'Harbinger','Necromancer',null,['Support Harbinger','necromancer/support-harbinger'],'Support Harbinger');
add(D,'Spellbreaker','Warrior','Spear DPS',['Power Spellbreaker','warrior/power-spellbreaker'], 'Power Spellbreaker');
add(D,'Untamed','Ranger','DPS Untamed',['Power Untamed','ranger/power-untamed'],'Power Untamed');
add(D,'Chronomancer','Mesmer','DPS Chrono',['Power Chronomancer','mesmer/power-chronomancer'],null);
add(D,'Necromancer','Necromancer','Core Necro',['Power Necromancer','necromancer/power-necromancer'],'Power Necro');
add(D,'Reaper','Necromancer','Power Reaper',['Power Reaper','necromancer/power-reaper'],'Power Reaper');
add(D,'Mirage','Mesmer','DPS Mirage',['Power Mirage','mesmer/power-mirage'],null);
add(D,'Scourge','Necromancer','Power Scourge',['Power Scourge','necromancer/power-scourge'], 'Power Scourge');
add(D,'Ritualist','Necromancer','Power Ritualist',['Power Ritualist','necromancer/power-ritualist'],'Power Ritualist');
add(D,'Virtuoso','Mesmer','DPS Virt',['Power Virtuoso','mesmer/power-virtuoso'],'Power Virtuoso');
add(X,'Evoker','Elementalist','Spear Backline',['Power Evoker','elementalist/power-evoker'],'DPS Evoker');
add(X,'Vindicator','Revenant','Shiro DPS Vindicator',['Power Vindicator','revenant/power-vindicator'],'Power Vindicator');
add(X,'Catalyst','Elementalist','Spear Backline',['Power Catalyst','elementalist/power-catalyst'],'DPS Catalyst');
add(X,'Dragonhunter','Guardian','Power DH',['Power Dragonhunter','guardian/power-dragonhunter'],'Power Dragonhunter');
add(X,'Tempest','Elementalist','DPS Tempest',['Power Tempest','elementalist/power-tempest'],null);
add(X,'Guardian','Guardian','Core Power Guardian',['Power Guardian','guardian/power-guardian'],null);
add(X,'Warrior','Warrior','Spear DPS',['Power Warrior','warrior/power-warrior'],'DPS Warrior');
add(X,'Berserker','Warrior','DPS Berserker',['Power Berserker','warrior/power-berserker'],null);
add(X,'Soulbeast','Ranger','DPS Soulbeast',['Power Soulbeast','ranger/power-soulbeast'],null);
add(X,'Amalgam','Engineer','DPS Amalgam',['Power Amalgam','engineer/power-amalgam'],'Power Amalgam');
add(X,'Holosmith','Engineer','DPS Holo',['Power Holosmith','engineer/power-holosmith'],'Power Holosmith');
add(X,'Herald','Revenant','Hammer Herald',['Power Herald','revenant/power-herald'],null);
add(X,'Renegade','Revenant',null,['Power Renegade','revenant/power-renegade'],null);
add(X,'Conduit','Revenant','Shiro Razah Conduit',['Power Conduit','revenant/power-conduit'],null);
add(X,'Weaver','Elementalist',null,['Power Weaver','elementalist/power-weaver'],null);
add(X,'Scrapper','Engineer','Power Explosives',['Power Scrapper','engineer/power-scrapper'],'Power Scrapper');
// Verified direct GW2Mists build pages; other entries retain the overview.
const mistsDirect={
 'Support Firebrand':'guardian/support-firebrand',
 'Support Luminary':'guardian/support-luminary',
 'Support Chronomancer':'mesmer/support-chronomancer',
 'Support Troubadour':'mesmer/support-troubadour',
 'Heal Druid':'ranger/heal-druid',
 'Support Specter':'thief/support-specter',
 'Support Vindicator':'revenant/support-vindicator',
 'Support Evoker':'elementalist/support-evoker',
 'Cleanse Tempest':'elementalist/cleanse-tempest',
 'Heal Scrapper':'engineer/heal-scrapper',
 'Support Paragon':'warrior/support-paragon',
 'Support Catalyst':'elementalist/support-catalyst',
 'Support Harbinger':'necromancer/support-harbinger',
 'Power Spellbreaker':'warrior/power-spellbreaker',
 'Power Untamed':'ranger/power-untamed',
 'Power Necro':'necromancer/power-necro',
 'Power Reaper':'necromancer/power-reaper-2',
 'Power Scourge':'necromancer/power-scourge',
 'Power Ritualist':'necromancer/power-ritualist',
 'Power Virtuoso':'mesmer/power-virtuoso',
 'DPS Evoker':'elementalist/dps-evoker',
 'Power Vindicator':'revenant/power-vindicator',
 'DPS Catalyst':'elementalist/dps-catalyst',
 'Power Dragonhunter':'guardian/power-dragonhunter',
 'DPS Warrior':'warrior/dps-warrior',
 'Power Amalgam':'engineer/power-amalgam',
 'Power Holosmith':'engineer/power-holosmith',
 'Power Scrapper':'engineer/power-scrapper'
};
data.forEach(row=>{const build=row[5];if(build && mistsDirect[build[0]])build[1]='https://gw2mists.com/en/builds/'+mistsDirect[build[0]]});
// MetaBattle names above are taken from its WvW overview; its Guardian core URL uses the base profession.
data.forEach(row=>{if(row[1]==='Guardian'&&row[3])row[3][1]=M+encodeURIComponent('Guardian - Core Power Guardian')});
// Snow Crows' role-specific rankings, not the overall tier or the other sources' ratings.
const tiers={
 [P]:{S:['Firebrand','Luminary'],A:['Chronomancer'],B:['Dragonhunter']},
 [H]:{S:['Druid'],A:['Specter'],B:['Vindicator','Evoker','Tempest'],C:['Scrapper']},
 [T]:{S:['Troubadour'],A:['Paragon','Chronomancer','Catalyst','Renegade','Spellbreaker'],C:['Conduit','Harbinger']},
 [D]:{S:['Spellbreaker'],A:['Untamed','Chronomancer','Necromancer','Reaper'],'B+':['Mirage','Scourge'],B:['Ritualist'],C:['Virtuoso']},
 [X]:{A:['Evoker','Vindicator','Catalyst'],'B+':['Renegade','Dragonhunter','Tempest','Conduit','Guardian'],B:['Berserker','Soulbeast','Amalgam','Holosmith','Warrior','Herald'],C:['Weaver','Scrapper']}
};
const tierOrder=['S','A','B+','B','C'];
function tierFor(row){return tierOrder.find(t=>(tiers[row[0]][t]||[]).includes(row[1]))||null}
// Icon URLs come from the official API and are included with this site.
const iconUrls=new Map(Object.entries(officialIcons));
function showIcons(){document.querySelectorAll('.class-icon[data-name]').forEach(el=>{const url=iconUrls.get(el.dataset.name);if(!url||el.querySelector('img'))return;const img=document.createElement('img');img.alt='';img.width=27;img.height=27;img.referrerPolicy='no-referrer';img.addEventListener('load',()=>{el.textContent='';el.append(img)});img.src=url;});}
const rationale={
 [P+'|Firebrand']:'Viele Segen, Kontrolle und verlässliches Aufheben von Betäubung.',[P+'|Luminary']:'Sehr viel Stabilität und defensive Segen; weniger Gruppen-Stunbreaks.',[P+'|Chronomancer']:'Wichtige Segen und Mesmer-Utility; vielseitig im Gruppenschutz.',[P+'|Dragonhunter']:'Stabilität und Blocks, aber insgesamt weniger Segen.',
 [H+'|Druid']:'Starke Heilung und Zustandsentfernung auf Distanz; wichtig für Erholung.',[H+'|Specter']:'Viel Barriere und Heilung, zusätzlich defensive Segen.',[H+'|Vindicator']:'Sehr starke Heilung; weniger Zustandsentfernung und Segen.',[H+'|Evoker']:'Sehr viel Heilung und Cleanse, dafür wenig zusätzliche Segen.',[H+'|Tempest']:'Heilung und Cleanse mit Wiederbelebung und Kontrolle; weniger offensive Segen.',[H+'|Scrapper']:'Heilung, Superspeed und Macht; hilfreich für mobile Gruppen.',
 [T+'|Troubadour']:'Vielseitige Segen, Heilung und Mesmer-Utility; auch andere Supportrollen möglich.',[T+'|Paragon']:'Starke Segen, besonders Widerstand und Macht, plus Wiederbelebungs-Utility.',[T+'|Catalyst']:'Breites Segensangebot und Wiederbelebungs-Utility; kein klarer Spezialist.',[T+'|Renegade']:'Stabilität und Macht mit zusätzlichem Schaden und Kontrolle.',[T+'|Spellbreaker']:'Macht und Unterstützung im Nahkampf mit Segenentfernung.',[T+'|Conduit']:'Stabilität, Widerstand und Heilung, aber begrenzte weitere Utility.',[T+'|Harbinger']:'Macht und Wut sowie Nekromanten-Utility; eingeschränkter als andere Optionen.',
 [D+'|Spellbreaker']:'Hoher Burst und starke Segenentfernung mit viel Utility.',[D+'|Necromancer']:'Schwerpunkt auf Segenentfernung und Schaden auf Distanz.',[D+'|Reaper']:'Nahkampfschaden mit Segenentfernung und Kontrolle.',[D+'|Untamed']:'Nahkampfschaden, Segenentfernung und Kontrolle.',[D+'|Chronomancer']:'Schaden, Kontrolle und Segenentfernung mit Gruppen-Utility.',[D+'|Scourge']:'Segenentfernung und Kontrolle; präzises Timing im Nahkampf nötig.',[X+'|Evoker']:'Starker Distanzschaden und Druck auf gegnerische Unterstützung.',[X+'|Catalyst']:'Distanz-Burst mit unblockbarem Schaden.',[X+'|Vindicator']:'Schaden auf Nähe und Distanz; Ausweichen hilft beim Überleben.'
};
const roles=[P,H,T,D,X], descriptions=['Stabilität & Schutz','Heilung, Barriere & Cleanse','Segen & zusätzliche Unterstützung','Schaden & Segen entfernen','Schaden & Druck'];let active='Alle';const rows=document.querySelector('#rows'),search=document.querySelector('#search');
function render(){let q=search.value.trim().toLocaleLowerCase('de'),count=0;rows.innerHTML='';roles.forEach((role,i)=>{let list=data.filter(x=>(active==='Alle'||active===role)&&x[0]===role&&x.flat(2).join(' ').toLocaleLowerCase('de').includes(q)).sort((a,b)=>(tierOrder.indexOf(tierFor(a))<0?99:tierOrder.indexOf(tierFor(a)))-(tierOrder.indexOf(tierFor(b))<0?99:tierOrder.indexOf(tierFor(b))));if(!list.length)return;count+=list.length;let group=document.createElement('tr');group.className='group';group.innerHTML=`<th colspan="4"><span class="role-dot role-${i}"></span>${role.toUpperCase()} <small>${descriptions[i]}</small><span class="count">${String(list.length).padStart(2,'0')}</span></th>`;rows.append(group);list.forEach(x=>{let tr=document.createElement('tr');tr.innerHTML=`<th scope="row"><span class="class-icon" data-name="${x[1]}" aria-hidden="true">${x[1].charAt(0)}</span><span class="class-name">${x[1]} <span class="tier">${tierFor(x)==='S'?'A+ (S)':tierFor(x)||'Nicht bewertet'}</span><small>${x[2]}</small>${rationale[x[0]+'|'+x[1]]?`<small class="why">${rationale[x[0]+'|'+x[1]]}</small>`:''}</span></th>`+x.slice(3).map(v=>v?`<td><a class="build" href="${v[1]}" target="_blank" rel="noopener">${v[0]} <span>↗</span></a>${v[1]===G||/^https:\/\/snowcrows\.com\/builds\/wvw\/[^/]+$/.test(v[1])?'<small class="listnote">Build-Liste öffnen</small>':''}</td>`:'<td class="dash">Nicht erfasst</td>').join('');rows.append(tr)});});document.querySelector('#empty').hidden=!!count;showIcons();}
document.querySelectorAll('[data-role]').forEach(b=>b.addEventListener('click',()=>{active=b.dataset.role;document.querySelectorAll('[data-role]').forEach(x=>x.classList.toggle('selected',x===b));render()}));search.addEventListener('input',render);render();
