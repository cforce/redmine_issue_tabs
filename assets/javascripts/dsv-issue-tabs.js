/*
Author: https://github.com/cforce
Date: 15.07.2011
*/
var tab1 = document.createElement('a');
var tab2 = document.createElement('a');

function journalShowCommentOnly()
{	
	var liste = document.getElementById('history');
	if (liste) {
		changeList = liste.getElementsByTagName("div");
		retAry = new Array();
		var isChange = /(change-*)/g;
		var hasJournal = /(journal-*)/g;
		
		for(var i = 0; i < changeList.length; i++)
		{
			if(isChange.exec(changeList[i].id))
			{
				journalList = changeList[i].getElementsByTagName("div");
				counter = 0;
				for(var j = 0; j < journalList.length; j++)
				{
					if(hasJournal.exec(journalList[j].id))
					{
						counter++;
					}			
				}
				if(counter == 0)
				{
					changeList[i].style.display = 'none';
				}
			}
		}
	}
	tab1.className = '';
	tab2.className = 'selected';
}

function journalShowAll()
{
	var liste = document.getElementById('history');
	if (liste) {
		changeList = liste.getElementsByTagName("div");
		retAry = new Array();
		var isChange = /(change-*)/g;
		var hasJournal = /(journal-*)/g;
		
		for(var i = 0; i < changeList.length; i++)
		{
			if(isChange.exec(changeList[i].id))
			{
				changeList[i].style.display = '';
			}
		}
	}
	tab1.className = 'selected';
	tab2.className = '';
}
/*
Erstellen und einfügen des Button(Links) mit dem sich die Elemente ein- uns ausblenden lassen
*/
function createTabs()
{
	tab1.href = '#';
	tab1.id = 'journalShowAll';
	tab1.onclick = journalShowAll;
	tab1.innerHTML = 'Alle';	
	
	tab2.href = '#';
	tab2.id = 'journalShowCommentOnly';
	tab2.onclick = journalShowCommentOnly;
	tab2.innerHTML = 'Kommentare';
	
	var tab_ul = document.createElement('ul');
	
	var tab_li_1 = document.createElement('li');
	tab_li_1.appendChild(tab1);
	var tab_li_2 = document.createElement('li');
	tab_li_2.appendChild(tab2);
	
	tab_ul.appendChild(tab_li_1);
	tab_ul.appendChild(tab_li_2);
	
	var tab_div = document.createElement('div');
	tab_div.className = 'tabs';	
	tab_div.appendChild(tab_ul);	
	
	var history = document.getElementById('history');
	if (history) {
		history.replaceChild(tab_div,history.getElementsByTagName("h3")[0]);
	}
}
/*
Funktion wird aufgerufen, wenn die Seite vollständig aufgebaut wurde.
*/
function init_issue_tabs() 
{		
	createTabs();
	journalShowCommentOnly();
}

document.observe('dom:loaded', function(){
	init_issue_tabs();
});