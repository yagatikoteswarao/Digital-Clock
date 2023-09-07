    function digitalclock()
        {
            var date=new Date()

            var hh=date.getHours()
            var mm=date.getMinutes()
            var ss=date.getSeconds()
            var dd=date.getDate()
            var month=date.getMonth()
            var yy=date.getFullYear()
            var dy=date.getDay()
            var am_pm="AM"
            if(hh>=12)
            {
                am_pm="PM"
                if(hh>12)
                {
                    hh-=12;
                }
            }
            if(hh==0)
            {
                am_pm="AM"
                hh=12;
            }
            var time=hh+":"+mm+":"+am_pm
            document.getElementById("time").innerHTML=time
            if(month==0)
            {
               month="jan"
            }
            else if(month==1)
            {
                month="feb"
            }
            else if(month==2)
            {
                month="mar"
            }
            else if(month==3)
            {
                month="apr"
            }else if(month==4)
            {
                month="may"
            }else if(month==5)
            {
                month="jun"
            }else if(month==6)
            {
                month="july"
            }else if(month==7)
            {
                month="aug"
            }else if(month==8)
            {
                month="sept"
            }else if(month==9)
            {
                month="oct"
            }else if(month==10)
            {
                month="nov"
            }else if(month==11)
            {
                month="dec"
            }
            switch(dy)
            {
                case 0: dy="sunday"
                        document.getElementById("a").style.backgroundImage="url(jesus.jpg)"
                break;
                case 1: dy="Monday"
                        document.getElementById("a").style.backgroundImage="URL(shiva.jpg)"
                break;
                case 2: dy="Tuesday"
                        document.getElementById("a").style.backgroundImage="URL(hanuman.jpg)"
                break;
                case 3: dy="Wednesday"
                        document.getElementById("a").style.backgroundImage="URL(ayyappa.jpg)"
                break;
                case 4: dy="Thursday"
                         document.getElementById("a").style.backgroundImage="URL(saibaba.jpg)"
                break;
                case 5: dy="Friday"
                         document.getElementById("a").style.backgroundImage="URL(jumma.png)"
                break;  
                case 6: dy="Saturday"
                         document.getElementById("a").style.backgroundImage="URL(venk.webp)"
                break;
            }
            document.getElementById("date").innerHTML=dd+"/"+month+"/"+yy
            document.getElementById("day").innerHTML=dy
            document.getElementById("sec").innerHTML=ss
            document.getElementById("time").innerHTML=hh+":"+mm+" "+am_pm
            var updatethetime=setTimeout(function(){digitalclock()}, 1000)
        }